let $ = {
    /**
     * 
     * @param {Object} dataObj 
     */
    param: function (dataObj) {
        let dataStr = "";
        for (let k in dataObj) {
            dataStr += k + "=" + dataObj[k] + '&'
        }
        dataStr = dataStr.slice(0, -1);
        console.log(dataStr)
        return dataStr;
    },
    /**
     * 
     * @param {*} options 
     */
    ajax: function (options) {
        let type = options.type || 'GET';
        let url = options.url || "";
        let data = this.param(options.data || {})
        let success = options.success;
        let xhr = new XMLHttpRequest();
        if (type == 'GET') {
            url = url + '?' + data;
            data = null;
        }
        xhr.open(type, url);
        if (type == 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        }
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                success(xhr.responseText);
            }
        }
    }

}