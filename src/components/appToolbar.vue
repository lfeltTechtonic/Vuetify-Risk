<template>
  <v-toolbar color="blue-grey darken-2" dark>
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    <router-link to="/">
      <v-toolbar-title class="white--text">Risky Business</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link to="/contact">
        <v-btn flat>Details</v-btn>
      </router-link>
      <v-btn flat>Reports</v-btn>
      <router-link to="/login">
      <v-btn flat>Account</v-btn>
      </router-link>
      
    </div>

  </v-toolbar>
  
</template> 

<script>
  export default {
    data () {
      return {
      
      }
    }
  }
</script>