<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { HorizontalBar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Completed',],
          datasets: [
            {
              label: 'Completed',
              backgroundColor: ['#FFE082'], 
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [40, 100]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                // beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true
              },
              ticks: {
                beginAtZero: true
              },
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