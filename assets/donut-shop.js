$(document).ready(function(){
    $('.sidenav').sidenav();
})var getTodaysDate = document.querySelector(".date")

var today = dayjs().format('MMMM D, YYYY')
getTodaysDate.textContent = today;