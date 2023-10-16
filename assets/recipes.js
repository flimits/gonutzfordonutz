$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".modal").modal();
})

$(window).on("load",function(){
    if(!donutData || !doughnutData){
    window.location.reload();
    localStorage.setItem("donutData", 12);
    localStorage.setItem("doughnutData", 2);
    }
});

var donutPoll = document.getElementById('myChart');
var donutData = localStorage.getItem("donutData");
var doughnutData = localStorage.getItem("doughnutData");

var pollResults = {
    type: 'doughnut',
    data: {
      labels: ['Donut','Doughnut'],
      datasets: [{
        label: '# of Votes',
        data: [parseInt(donutData), parseInt(doughnutData)],
      }]
    }
};

new Chart(donutPoll, pollResults);

$(".btn-large").on("click",function(){
    window.location.reload();
    if($(this).attr("id") === "poll-btn-donut"){
        if(!donutData){
        localStorage.setItem("donutData", 12);
        localStorage.setItem("doughnutData", 2);
        }
        else{
            localStorage.setItem("donutData", parseInt(donutData)+1);
        }
    }
    else{
        if(!doughnutData){
        localStorage.setItem("doughnutData", 2);
        localStorage.setItem("donutData", 12);
        }
        else{
            localStorage.setItem("doughnutData", parseInt(doughnutData)+1)
        }
    }
});

$("#recipe-btn").on("click", function(event){
    event.preventDefault();
    
    var query = $("#textarea1").val()
    var donutSearch = "https://api.spoonacular.com/recipes/complexSearch?apiKey=32c66c99f2d24929ba5b950ee9a6ad04&query="+ query;

    fetch(donutSearch)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var recipePic = data.results[0].image;
        var recipeID = data.results[0].id;
        var recipeURL = "https://api.spoonacular.com/recipes/" + recipeID + "/information?apiKey=32c66c99f2d24929ba5b950ee9a6ad04"
        $("#recipe-pic").attr("src", recipePic);
        fetch(recipeURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var recipeInstructions = data.instructions;
            var recipeURL = data.sourceUrl;
            var recipeTitle = data.title;
            $(data.extendedIngredients).each(function(){
                $("#ingredients").append("<p>" + this.name + "</p>");
            })
            $("#recipe-title").text(recipeTitle);
            $("#instruction").append("<p>" + recipeInstructions + "</p>");
            $("#url").attr("href", recipeURL);
        })
    })
})