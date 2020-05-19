$(document).ready(function () {
  $.ajax({
    // 请求方式
    type: 'GET',
    url: '/api/getAll',
    data: null,
    success: function (result) {
      // console.log(data);
      let htmlStr = template('list_templ', {
        list: result.data
      });
      $('#members').html(htmlStr);
    }
  })

})