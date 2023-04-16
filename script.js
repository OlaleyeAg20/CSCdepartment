const menuBtn = document.getElementById('menu-btn')
const menuList = document.getElementById('menu-list')
const closeBtn = document.getElementById('close-btn')
const closeDivBtn = document.getElementById("close-div-btn")
const summaryBtn = document.getElementById("summary-btn")
const info = document.getElementById('info')

menuBtn.addEventListener('click', function(){
     menuList.style.display = "block"
})

closeBtn.addEventListener('click', function(){
     menuList.style.display = "none"
})
summaryBtn.addEventListener('click', function(){
     info.style.display = "block"
})
closeDivBtn.addEventListener('click', function(){
     info.style.display = "none"
})