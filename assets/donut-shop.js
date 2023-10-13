var getTodaysDate = document.querySelector(".date")

var todayDate = dayjs().format('MMMM D, YYYY')
getTodaysDate.textContent = todayDate;

$(document).ready(function () {
    $('.sidenav').sidenav();
    M.updateTextFields();

})

$('#textarea1').keypress(function (e) {
    if (e.which == 13) {
        var newDataMerc = $("#textarea1").val();
        $('#saveItM').append("<p>" + newDataMerc + "</p>");
        $("#textarea1").val("");  // Clear the input field after appending
        return false;
    }
})

$('#textarea2').keypress(function (e) {
    if (e.which == 13) {
        var newDataCust = $("#textarea2").val();
        $('#saveItC').append("<p>" + newDataCust + "</p>");
        $("#textarea2").val("");  // Clear the input field after appending
        return false;
    }
})