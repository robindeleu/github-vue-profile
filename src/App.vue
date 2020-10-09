<template>
  <v-app>
    <v-app-bar
      app
      color=#26c6da
      dark
    >
    
      <div class="d-flex align-center" v-if="profile">
        <v-col>
        <v-avatar size="45">
          <v-img
            alt="Avatar user"
            contain
            :src="profile.avatar_url"
            transition="scale-transition"
          />
        </v-avatar>
        </v-col>
        <span class="mr-2">Hello, you're looking for the github profile of {{profile.name}}</span>
      </div>
    </v-app-bar>

    <v-main>
      <HelloWorld v-show="false"/>
        <v-row justify="center">
          <v-col cols="2">
            <v-text-field
            hide-details
            placeholder="Type profile name"
            append-icon="mdi-magnify"
            single-line
            clearable
            @keyup.enter="fetch(name)"
            @click:append="fetch(name)"
            id="name" v-model="name" type="text" name="name">
            </v-text-field>
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
      <v-divider></v-divider>
      <p class="title font-weight-light">Repository's: {{profile.public_repos}}</p>
      <v-divider></v-divider>
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
