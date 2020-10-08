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
        <v-row justify="center">
          <v-col cols="2">
            <input id="name" v-model="name" type="text" name="name" class="grey" >
          </v-col>
          <v-col cols="2">
            <v-btn color=#03A9F4 elevation="2" rounded @click="fetch(name)">Fetch Profile</v-btn>
          </v-col>
        </v-row>

   
<v-card  v-if="profile"
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
  >
    <v-card-title>
      <span class="title font-weight-light">{{ profile.login }}, works @{{profile.company}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      <p class="title font-weight-light">Followers: {{profile.followers}}</p>
      <p class="title font-weight-light">Repository's: {{profile.public_repos}}</p>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            :src="profile.avatar_url"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{profile.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
    
  </v-card>
<v-card  v-else
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="700"
  >
   <v-row justify="center">
      <v-col cols="7">
        <v-card-title>Please enter a Github username in the texbox below</v-card-title>
        <v-img  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></v-img>
      </v-col>
    </v-row>
  </v-card>
    
    
 
    

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
