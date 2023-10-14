var getTodaysDate = document.querySelector(".date");
var todayDate = dayjs().format('MMMM D, YYYY');
getTodaysDate.textContent = todayDate;


$(document).ready(function () {
    $('.sidenav').sidenav();
    M.updateTextFields();
})

// These two are variables to repopulate and get the blog with saved values.
var blogMCount = getItems("blogM");
var blogCCount = getItems("blogC");

// We want to check to see if anytihng is being entered by the Merchant here and
// post it and save it
$('#textarea1').keypress(function (e) {
    if (e.which == 13) {
        var newDataMerc = $("#textarea1").val();
        $('#saveItM').append("<p>" + newDataMerc + "</p>");
        postToLocalStore("blogM", newDataMerc, blogMCount++);
        $("#textarea1").val("");  // Clear the input field after appending
        return false;
    }
})

// We want to check to see if anytihng is being entered by the Customer here and
// post it and save it
$('#textarea2').keypress(function (e) {
    if (e.which == 13) {
        var newDataCust = $("#textarea2").val();
        $('#saveItC').append("<p>" + newDataCust + "</p>");
        postToLocalStore("blogC", newDataCust, blogCCount++);
        $("#textarea2").val("");  // Clear the input field after appending
        return false;
    }
})

// This is just to populate the localstorage with blog information for testing
// var blogMVal = "blogM";
// var blogCVal = "blogC";
// var number = 2;
// var value1 = "How about cake donuts?";
// var key1 = "blogM";

// postToLocalStore(key1,value1,number);

// Simple function to post values for the blogs to localStorage
function postToLocalStore(key, value, number) {
    var keySet = key + number
    localStorage.setItem(keySet, value);
};

// This function has the taks of scanning through localStorage and repopulating the blogs.
function getItems(whichBlog) {
    var i = true;
    var n = 1;
    do {
        var something = localStorage.getItem(whichBlog + n)
        if (something) {
            console.log("Data for blog " + whichBlog + " and number of times is " + n + "th item is " + something);
            if (whichBlog === "blogM") {
                $('#saveItM').append("<p>" + something + "</p>");
            } else {
                $('#saveItC').append("<p>" + something + "</p>");
            }
            n++;
        } else {
            i = false;
        }
    } while (i === true)
    return n;
}