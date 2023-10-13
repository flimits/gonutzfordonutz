$(document).ready(function(){
    $('.sidenav').sidenav();
})

var donutPoll = document.getElementById('myChart');

var pollResults = {
    type: 'doughnut',
    data: {
      labels: ['Donut','Doughnut'],
      datasets: [{
        label: '# of Votes',
        data: [14,2],
      }]
    },
    options: {
    },
    plugins: []
}

new Chart(donutPoll, pollResults);

$(".btn-large").on("click",function(){
    if($(this).attr("id") === "poll-btn-donut"){
        pollResults.data.datasets[0].data[0]
    }
    else{
        pollResults.data.datasets[0].data[1]
    }
})