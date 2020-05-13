/**
 * 
 * @param {*} options 
 */

function ajax(options) {
    let type = options.type;
    let url = options.url;
    let data = options.data;
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