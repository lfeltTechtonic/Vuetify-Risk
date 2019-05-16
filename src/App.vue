<template>
  <v-app>
    <v-content>
         <app-toolbar></app-toolbar>
      <router-view/>
        <app-footer></app-footer>
    </v-content>
  </v-app>
</template>

<script>
import appFooter from '@/components/appFooter'
import appToolbar from '@/components/appToolbar'
import Chart from 'chart.js';

export default {
  name: 'App', 
  components: {
    appToolbar, 
    appFooter
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

.v-content__wrap {
  background: #EEEEEE;
} 
</style>