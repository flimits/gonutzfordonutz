$(document).ready(function(){
    $('.sidenav').sidenav();
})

$(window).on("load",function(){
    if(!donutData || !doughnutData){
    window.location.reload();
    localStorage.setItem("donutData", 14);
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
        localStorage.setItem("donutData", 14);
        localStorage.setItem("doughnutData", 2);
        }
        else{
            localStorage.setItem("donutData", parseInt(donutData)+1);
        }
    }
    else{
        if(!doughnutData){
        localStorage.setItem("doughnutData", 2);
        localStorage.setItem("donutData", 14);
        }
        else{
            localStorage.setItem("doughnutData", parseInt(doughnutData)+1)
        }
    }
});