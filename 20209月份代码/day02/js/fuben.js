// var that;
// class Tab {
//     constructor(id) {
//         that = this;
//         this.main = document.querySelector(id);
//         this.add = this.main.querySelector('.tabadd');
//         this.ul = this.main.querySelector('.fisrstnav ul:first-child');
//         this.fsection = this.main.querySelector('.tabscon');
//         this.init();
//     }
//     init() {
//         this.updateNode();
//         this.add.onclick = this.addTab;
//         for (let i = 0; i < this.list.length; i++) {
//             this.list[i].index = i;
//             this.list[i].onclick = this.toggleTab;
//             this.remove[i].onclick = this.removeTab;
//             this.spans[i].ondblclick = this.editTab;
//             this.sections[i].ondblclick = this.editTab;
//         }
//     }
//     updateNode() {
//         this.list = this.main.querySelectorAll('li');
//         this.sections = this.main.querySelectorAll('section');
//         this.remove = this.main.querySelectorAll('.icon-guanbi');
//         this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');

//     }
//     toggleTab() {
//         that.claerClass();
//         this.className = 'liactive';
//         that.sections[this.index].className = 'conactive';
//     }
//     claerClass() {
//         for (let i = 0; i < this.list.length; i++) {
//             this.list[i].className = '';
//             this.sections[i].className = ''
//         }
//     }
//     // 2添加
//     addTab() {
//         that.claerClass();
//         let random = Math.random();
//         let li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
//         let section = `<section class="conactive">测试 ${random}</section>`;
//         that.ul.insertAdjacentHTML('beforeend', li);
//         that.fsection.insertAdjacentHTML('beforeend', section);
//         that.init();
//     }

//     // 3删除
//     removeTab(e) {
//         e.stopPropagation();
//         let index = this.parentNode.index;
//         that.list[index].remove();
//         that.sections[index].remove();
//         that.init();
//         if (document.querySelector('.liactive')) return;
//         index--;
//         that.list[index] && that.list[index].click();
//     }
//     // 4修改
//     editTab() {
//         let str = this.innerHTML;
//         window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
//         this.innerHTML = '<input type"text" />';
//         let input = this.children[0];
//         input.value = str;
//         input.select(); //选定状态
//         input.onblur = function () {
//             this.parentNode.innerHTML = this.value;
//         };
//         input.onkeyup = function (e) {
//             if (e.keyCode === 13) {
//                 this.blur();
//             }
//         }
//     }
// }
// new Tab('#tab')




// var that;
// // 初始化
// class Tab {
//     constructor(id) {
//         that = this;
//         this.main = document.querySelector(id);
//         this.add = this.main.querySelector('.tabadd')
//         this.ul = this.main.querySelector('.fisrstnav ul:first-child');
//         this.fsection = this.main.querySelector('.tabscon');
//         this.init();
//     }
//     // 绑定事件
//     init() {
//         this.updataNode();
//         this.add.onclick = this.addTab;
//         for (let i = 0; i < this.list.length; i++) {
//             this.list[i].index = i;
//             this.list[i].onclick = this.toggleTab;
//             this.remove[i].onclick = this.removeTab;
//             this.spanS[i].ondblclick = this.enditTab;
//             this.sectionS[i].ondblclick = this.enditTab;

//         }
//     }
//     updataNode() {
//         this.list = this.main.querySelectorAll('li');
//         this.sectionS = this.main.querySelectorAll('section');
//         this.remove = this.main.querySelectorAll('.icon-guanbi');
//         this.spanS = this.main.querySelectorAll('.fisrstnav li span:first-child');

//     }
//     toggleTab() {
//         that.claerClass();
//         this.className = 'liactive';
//         that.sectionS[this.index].className = 'conactive';
//     }
//     claerClass() {
//         for (let i = 0; i < this.list.length; i++) {
//             this.list[i].className = '';
//             this.sectionS[i].className = '';
//         }
//     }

//     // 2添加
//     addTab() {
//         that.claerClass();
//         let random = Math.random();
//         let li = '<li class="liactive"><span>选择卡</span><span class="iconfont icon-guanbi"></span></li>'
//         let section = ` <section class="conactive">${random}</section>`
//         that.ul.insertAdjacentHTML('beforeend', li);
//         that.fsection.insertAdjacentHTML('beforeend', section);
//         that.init();
//     }
//     // 3删除
//     removeTab(e) {
//         e.stopPropagation();
//         let index = this.parentNode.index;
//         that.list[index].remove();
//         that.sectionS[index].remove();
//         that.init();
//         if (document.querySelector('.liactive')) return;
//         index--;
//         that.list[index] && that.list[index].click();
//     }

//     // 4修改
//     enditTab() {
//         let str = this.innerHTML;
//         window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
//         this.innerHTML = '<input type="text" />';
//         let input = this.children[0];
//         input.value = str;
//         input.select();
//         input.onblur = function () {
//             this.parentNode.innerHTML = this.value;

//         }
//         input.onkeyup = function (e) {
//             if (e.keCode === 13) {
//                 this.blur();
//             }
//         }
//     }
// }

// new Tab('#tab')




// var that;
// class Tab {
//     constructor(id) {
//         that = this;
//         this.main = document.querySelector(id);
//         this.add = this.main.querySelector('.tabadd');
//         this.up = this.main.querySelector('.fisrstnav ul:first-child');
//         this.fsection = this.main.querySelector('.tabscon');
//         this.init()
//     }
//     init() {
//         this.update();
//         this.add.onclick = this.addTab;
//         for (let i = 0; i < this.list.length; i++) {
//             this.list[i].index = i;
//             this.list[i].onclick = this.toggTab;
//             this.remove[i].onclick = this.removeTab;
//             this.spanS[i].ondblclick = this.enditTab;
//             this.sectionX[i].ondblclick = this.enditTab;
//         }
//     }
//     update() {
//         this.list = this.main.querySelectorAll('li');
//         this.sectionX = this.main.querySelectorAll('section');
//         this.remove = this.main.querySelectorAll('.icon-guanbi')
//         this.spanS = this.main.querySelectorAll('.fisrstnav li span:first-child');
//     }
//     toggTab() {
//         that.claerTab();
//         this.className = 'liactive';
//         that.sectionX[this.index].className = 'conactive'
//     }
//     claerTab() {
//         for (let i = 0; i < this.list.length; i++) {
//             this.list[i].className = '';
//             this.sectionX[i].className = "";
//         }
//     }

//     addTab() {
//         that.claerTab();
//         let random = Math.random();
//         let li = '                    <li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>        '
//         let section = ` <section class="conactive">${random}</section>`
//         that.up.insertAdjacentHTML('beforeend', li);
//         that.fsection.insertAdjacentHTML('beforeend', section);
//         that.init();
//     }

//     removeTab(e) {
//         e.stopPropagation();
//         let index = this.parentNode.index;
//         that.list[index].remove();
//         that.sectionX[index].remove();
//         that.init();
//         if (document.querySelector('.liactive')) return;
//         index--;
//         that.list[index] && that.list[index].click();
//     }
//     enditTab() {
//         let str = this.innerHTML;
//         window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
//         this.innerHTML = '<input type="text" />';
//         let input = this.children[0];
//         input.value = str;
//         input.select();
//         input.onblur = function () {
//             this.parentNode.innerHTML = this.value;

//         }
//         input.onkeyup = function (e) {
//             if (e.keCode === 13) {
//                 this.blur();
//             }
//         }
//     }
// }
// new Tab('#tab')