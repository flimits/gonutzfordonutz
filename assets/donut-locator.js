$(document).ready(function(){
    $('.sidenav').sidenav();
})

$(".btn").on("click",function(event){
    var location = $("#textarea1").val();
    event.preventDefault();
    $("iframe.map").attr("src", "https://www.google.com/maps/embed/v1/search?key=AIzaSyA2Qq9tiWUtSdlkiBJov0EMgRDPTEMKJHw&zoom=7&q=donut+shops+in+" + location);
})