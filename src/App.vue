<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld v-show="false"/>

    <v-container v-if="profile">
      <v-row>
      <v-col cols="12">
        <h2>{{ profile.login }}</h2>
        <h3> The real name is: {{profile.name}}</h3>
      </v-col>
    </v-row>
    </v-container>

    <v-container v-if="profile">
      <v-row>
      <v-col cols="12">
        <v-img scr="profile.avatar_url"></v-img>
      </v-col>
    </v-row>
    </v-container>
    
    <v-container v-if="profile">
      <v-row>
      <v-col cols="12">
        <p>Works in {{profile.company}}</p>
      </v-col>
    </v-row>
    </v-container>

    <v-container v-if="profile">
      <v-row>
      <v-col cols="12">
        <p>This is the ammount of followers: {{profile.followers}}</p>
      </v-col>
    </v-row>
    </v-container>
  
    <v-container v-if="profile">
      <v-row>
      <v-col cols="12">
        <p>This is the ammount of repository's: {{profile.public_repos}}</p>
      </v-col>
    </v-row>
    </v-container>     

    <v-row>
      <v-col cols="6">
        <v-btn block primary @click="fetch">Fetch Profile</v-btn>
      </v-col>
    </v-row>

    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import axios from 'axios';
export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    profile: null
  }),
  
  methods:{
    fetch(){
      console.log("Fetching profile ....")

      axios.get('http://localhost:3000/users/robindeleu').then(response => {
        console.log(response);
        this.profile = response.data;
      }).catch(e => {
        console.log(e)
      }
        
      )
    }
  },
};
</script>
