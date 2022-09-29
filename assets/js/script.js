// Tabs Filter function
var tabList = document.querySelectorAll('.tab-list');
var tabContentList = document.querySelectorAll('.tab-content-list');

tabList.forEach(function (tabLi,index) {
  tabLi.addEventListener('click',function () {
    var activeList = document.querySelector('.active-list');
    activeList.classList.remove('active-list');
    tabLi.classList.add('active-list');
    var activeTab = document.querySelector('.active-tab');
    activeTab.classList.remove('active-tab');
    tabContentList[index].classList.add('active-tab');
  })
})

 





















