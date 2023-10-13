$(document).ready(function(){
    $('.sidenav').sidenav();
})
var donutPoll = document.getElementById('myChart');
      
new Chart(donutPoll, {
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
});