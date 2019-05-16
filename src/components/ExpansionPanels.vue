
<template>
<v-container fluid grid-list-xl>
  <v-expansion-panel dark>
    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <template v-slot:header>
        <div>Beat Port</div>
      </template>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
     <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <template v-slot:header>
        <div>CU</div>
      </template>
      <v-card>
        <v-card-text> <pieChart></pieChart> </v-card-text>
        <pieChart></pieChart>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-container>
</template>



 <v-toolbar color="teal" dark @click="visible=!visible">
                 <v-toolbar-title>My List of Items</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon><v-icon>{{visible?'expand_less':'expand_more'}}</v-icon>
                       </v-btn>
            </v-toolbar>
            <v-expansion-panel>
              <v-expansion-panel-content:value="visible">
         <v-card class="elevation-20">
                <div slot="header">Item</div>
     
        <pieChart></pieChart>

        <v-card-text text-md-center primary-title>
          <div>
            <h3 class="headline mb-0 text-md-left">Beat Port</h3>
            <!-- <div> {{ card_text }} </div> -->
          </div>
        </v-card-text>

        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
            
      </v-expansion-panel>