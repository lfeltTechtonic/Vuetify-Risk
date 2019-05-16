<template>
  <v-form>
    <v-container @submit.prevent="submit">
         <v-alert
      :value="alert"
      type="warning"
    >
      Please fill in correctly
    </v-alert>
      <v-layout>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="password"
            label="password"
            type="password"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
           <v-btn color="success">Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => {
      return{
        email:null,
        password:null,
        alert:false
      }
    },
    methods:{
      submit(){
        if(!this.email && !this.password){
          this.alert= true
        }
      console.log("submit")
    }
  }
  }
</script>