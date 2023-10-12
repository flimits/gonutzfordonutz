var getTodaysDate = document.querySelector(".date")

var todayDate = dayjs().format('MMMM D, YYYY')
console.log("date " + todayDate);
getTodaysDate.textContent = todayDate;

$(document).ready(function () {
    $('.sidenav').sidenav();
    M.updateTextFields();

})

// Here the value is stored for Merchant Blog  
// function myFunction() {
//     var m = document.getElementById("myStore").value;
//     document.getElementById("saveItM").innerHTML = m;
// } 

$("#btn").on("click", function() {
    var newData = $("#myStore").val();
    $("#saveItM").append("<p>" + newData + "</p>");
})