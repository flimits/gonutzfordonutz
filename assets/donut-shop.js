var getTodaysDate = document.querySelector(".date")

var todayDate = dayjs().format('MMMM D, YYYY')
console.log("date " + todayDate);
getTodaysDate.textContent = todayDate;

$(document).ready(function(){
    $('.sidenav').sidenav();
})
// get some infput for the perchange to advertise in their blog.
$(document).ready(function() {
    M.updateTextFields();
  });
