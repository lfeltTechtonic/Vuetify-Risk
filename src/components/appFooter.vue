<template>
  <v-footer
    dark
    height="auto"
   absolute
    
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-text class="blue-grey darken-2" >
        <strong class="subheading justify-center">Managing your risks so you can manage your business!</strong>

        <!-- <v-spacer></v-spacer> -->

        <!-- <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        > -->
          <!-- <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn> -->
      </v-card-text>

      <v-card-actions class="grey darken-4 justify-center">
        &copy;2019 — <strong>Risky Business</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      // icons: [
      //   'fab fa-facebook',
      //   'fab fa-twitter',
      //   'fab fa-google-plus',
      //   'fab fa-linkedin',
      //   'fab fa-instagram'
      // ]
    })
  }
</script>