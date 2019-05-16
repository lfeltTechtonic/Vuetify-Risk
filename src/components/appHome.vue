<template>

  <v-container fluid grid-list-xl>
    <h1 class="text-md-center">Risk Rating</h1>

    <v-layout row justify-space-between>
      <v-flex sm4>    
           <v-toolbar color="teal darken-3" dark class="btn btn-lg btn-primary" >
                 <v-toolbar-title>Low Risk</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon v-on:click="seen = !seen"><v-icon>{{visible?'expand_less':'expand_more'}}</v-icon>
                       </v-btn>
            </v-toolbar>
         <v-card class="elevation-20 teal lighten-5">
                <div slot="header">Item</div>
                
     <div v-if="seen">
        <pieChart></pieChart>
        </div>
        <v-card-text text-md-center primary-title>
          <div>
            <h3 class="headline mb-0 text-md-left">Beat Port</h3>
          </div>
        </v-card-text>

         <v-card-actions>
           <router-link to="/contact">
        <v-btn flat class="orange">Details</v-btn>
      </router-link>
        </v-card-actions>
      </v-card>
      </v-flex>
      
      <v-flex sm4>
          <v-toolbar color="amber accent-4" dark slot="activator">
          <v-toolbar-title>Medium Risk</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="listVisibility=!listVisibility" icon><v-icon>{{visible?'expand_less':'expand_more'}}</v-icon>
                </v-btn>
            </v-toolbar>
         <v-card class="elevation-20 amber lighten-5">
     
        <div v-if="listVisibility">
        <pieChart></pieChart>
        </div>

        <v-card-text text-md-center primary-title>
          <div>
            <h3 class="headline mb-0 text-md-left">CU</h3>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
      </v-flex>

      <v-flex class="riskRow" sm4>
            <v-toolbar color="deep-orange darken-4" dark slot="activator">
                 <v-toolbar-title>High Risk</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn @click="cats=!cats" icon><v-icon>{{visible?'expand_less':'expand_more'}}</v-icon>
                       </v-btn>
            </v-toolbar>
         <v-card class="elevation-20 deep-orange lighten-5">
     
        <div v-if="cats">
        <pieChart></pieChart>
        </div>
        <v-card-text text-md-center primary-title>
          <div>
            <h3 class="headline mb-0 text-md-left">Portal</h3>
            <!-- <div> {{ card_text }} </div> -->
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
       <v-card class="elevation-20 deep-orange lighten-5">
      <div v-if="cats">
        <pieChart></pieChart>
     </div>
        <v-card-text text-md-center primary-title>
          <div>
            <h3 class="headline mb-0 text-md-left">Sphero</h3>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container> 
</template>


<script>
import pieChart from '@/components/pieChart'
  export default {
    components: {
        pieChart,
    },
    data () {
      return {
        listVisibility: false,
        seen: false,
        cats: false,
        
      }
    }
  }
</script>

<style>
  .riskRow{
    padding-bottom: 50px;
  }
</style>