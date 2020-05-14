// $(document).ready(function () {
//   // TODO:  功能一: 显示已经存在的留言
//   // 1.创建一个函数，当DOM加载完毕 调用 查找留言函数
//   findGuest();


//   // TODO:  功能二: 添加留言
// })

// // 查找留言
// function findGuest() {
//   // 1.使用jQuery的ajax方法 发起ajax请求
//   $.ajax({
//     type: 'GET',
//     url: '/findGuest',
//     data: null,
//     success: function (data) {
//       // 2.把获取到的数据渲染到页面上
//       // console.log(data);

//       let htmlStr = '';
//       for (let i = 0; i < data.length; i++) {
//         htmlStr += `
//         <li class="media" data-time="${data[i].created}">
//           <img class="mr-3 " src="./image/avatar.png" alt="${data[i].name}">
//           <div class="media-body">
//             <h4>${data[i].name}</h4>
//             <p>${data[i].content}</p>
//            </div>
//          </li>
//         `
//       }

//       // console.log(htmlStr);
//       $('#messages').html(htmlStr);
//     }
//   })

// }

// 添加留言




























$(document).ready(function () {
  // TODO:  功能一: 显示已经存在的留言
  // 1.创建一个函数，当DOM加载完毕 调用 查找留言函数
  findGuest();


  // TODO:  功能二: 添加留言
  $('.#btn_send').on('click', function () {
    let formData = $('#form').serialze();

    addGuest(formData)
  })
})

function findGuest() {

  $.ajax({
    type: 'GET',
    url: '/findGuest',
    data: null,
    success: function (data) {
      let htmlStr = '';
      for (let i = 0; i < data.length; i++) {
        htmlStr += `
        <li class="media" data-time="${data[i].created}">
          <img class="mr-3 " src="./image/avatar.png" alt="${data[i].name}">
          <div class="media-body">
            <h4>${data[i].name}</h4>
            <p>${data[i].content}</p>
           </div>
         </li>
        `
      }
      $('#messages').html(htmlStr);
    }
  })

}


function addGuest(param) {
  $.ajax({
    type: 'POST',
    url: '/addGuest',
    data: param,
    success: function (data) {
      console.log(data)
    }
  })
}