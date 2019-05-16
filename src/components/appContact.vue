<template>
  <v-container fluid grid-list-xl>
      <!-- Project Name -->
    <h1 class="text-md-center pb-3 display-3">BeatPort</h1>
    <!-- Overall Risk -->
    <v-toolbar color="teal darken-3" dark slot="activator">
        <v-toolbar-title>Overall Risk: 3</v-toolbar-title>
            <v-spacer></v-spacer>
    </v-toolbar>
    <v-flex>
        <v-card class="elevation-20">
            <Budget></Budget>
        <v-card-text text-md-center primary-title>
            <div>
                <h3 class="headline mb-0 text-md-left">Budget Estimate</h3>
          </div>
        </v-card-text>
        </v-card>
    </v-flex>

<!-- Velocity -->
    <v-layout row justify-space-between>
     <v-flex sm6>
         <v-card height="300" class="elevation-20">
            <v-card-text class="text-center">
                <h1 class="text-md-center display-4">80 </h1>
                <v-spacer></v-spacer>
                <h3 class="headline mb-0 text-md-left">Velocity</h3>
            </v-card-text>
        </v-card>
    </v-flex>

<!-- QA -->
      <v-flex sm6>
         <v-card height="300" class="elevation-20">
             <v-card-text class="text-center">
            <h1 class="text-md-center display-4">45%</h1>
     </v-card-text>
        <v-card-text text-md-center primary-title>
          <div>
            <h3 class="headline mb-0 text-md-left">QA Assement</h3>
          </div>
        </v-card-text>
      </v-card>
      </v-flex>
    </v-layout>  
   
   <!-- Team Morale    -->
    <v-flex>
         <v-card class="elevation-20">
       <Bubble></Bubble>
        <v-card-text text-md-center primary-title>
          <div>
            <h3 class="headline mb-0 text-md-left">Team Morale</h3>
          </div>
        </v-card-text>
      </v-card>
      </v-flex>

 <!-- PM Comments -->
  <v-layout row>
    <v-flex >
      <v-card>
        <v-toolbar color="deep-purple" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>PM Comments</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="item.title"
              avatar
              ripple
              @click="toggle(index)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon
                  v-if="selected.indexOf(index) < 0"
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-2"
                >
                  star
                </v-icon>
              </v-list-tile-action>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

  </v-container>
</template>


<script>
import pieChart from '@/components/pieChart'
import Budget from '@/components/Budget'
import Bubble from '@/components/Bubble'
export default {
    components: {
        pieChart,
        Budget,
        Bubble
    },
    name: 'VueCharts',
    data () {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        dataset: [65, 59, 80, 81, 56, 55, 40]
      }
    },
     data () {
      return {
        selected: [2],
        items: [
          {
            action: '5/13/19',
            headline: 'Morale Boost',
            title: 'Ali Connors',
            subtitle: "Morale was boosted Last week by bringing in kittens and Ice cream. What a good idea! "
          },
          {
            action: '5/1/19',
            headline: 'Therapy Dog',
            title: 'me, Scrott, Jennifer',
            subtitle: "Let's try bringing in a therapy dog for the office."
          },
          {
            action: '4/23/19',
            headline: 'Bubbly Water',
            title: 'Sandra Adams',
            subtitle: 'Bubbly Water on Tap! Keep the team hydrated and focused'
          },
          {
            action: '4/4/19',
            headline: 'Added Team Member',
            title: 'Trevor Hansen',
            subtitle: 'Added a FroYo Machine to the Team!'
          },
          {
            action: '4/1/19',
            headline: 'Morale Booster Ideas',
            title: 'Britta Holt',
            subtitle: 'Moral on the Project is low. What can we do?'
          }
        ]
      }
    },

    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
}
  
</script>
