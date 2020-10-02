<template>
  <v-app>
    <v-app-bar
      app
      color=#03A9F4
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
      <v-row justify="center">
      <v-col cols="4">
        <h2>{{ profile.login }}</h2>
        <h3> The real name is: {{profile.name}}</h3>
      </v-col>
    </v-row>
    </v-container>

    <v-container v-if="profile">
      <v-row justify="center">
      <v-col cols="4">
        <v-img :src="profile.avatar_url" contain></v-img>
      </v-col>
    </v-row>
    </v-container>
    
    <v-container v-if="profile">
      <v-row justify="center">
      <v-col cols="4">
        <p>Works in {{profile.company}}</p>
      </v-col>
    </v-row>
    </v-container>

    <v-container v-if="profile">
      <v-row justify="center">
      <v-col cols="4">
        <p>This is the ammount of followers: {{profile.followers}}</p>
      </v-col>
    </v-row>
    </v-container>
  
    <v-container v-if="profile">
      <v-row justify="center">
      <v-col cols="4">
        <p>This is the ammount of repository's: {{profile.public_repos}}</p>
      </v-col>
    </v-row>
    </v-container> 

    <v-row justify="center">
      <v-col cols="4">
        <input id="name" v-model="name" type="text" name="name">
        <p>You're searching for {{name}}</p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="4">
        <v-btn color=#03A9F4 elevation="2" rounded @click="fetch(name)">Fetch Profile</v-btn>
      </v-col>
    </v-row>

    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import UsersAPI from './api/users';
//import axios from 'axios';
export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    profile: null,
    name: ''
  }),
  
  methods:{
    fetch(name){
    console.log("Fetching profile ....");
    console.log(name);
    UsersAPI.getUser(name).then(response => {
        console.log(response);
        this.profile = response.data;
      }).catch(e => {
        console.log(e)
      }
        
      )
/*
      axios.get('http://localhost:3000/users/robindeleu').then(response => {
        console.log(response);
        this.profile = response.data;
      }).catch(e => {
        console.log(e)
      }
        
      )*/
    }
  },
};
</script>
