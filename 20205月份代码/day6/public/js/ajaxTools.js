/**
 * 
 * @param {*} type 请求方式(get post put delete)
 * @param {*} url  请求地址
 * @param {*} data   请求数据
 * @param {*} success   请求成功后的回调函数
 */
function ajax(type, url, data, success) {
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