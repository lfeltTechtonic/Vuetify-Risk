<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Doughnut } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Doughnut,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Bugs', 'Completed', 'Budget',],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['#f87979', 'red', 'blue',], 
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [40, 20, 30,]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>