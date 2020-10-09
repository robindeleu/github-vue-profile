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
          <v-col cols="6" md="3" lg="3">
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
      <v-row justify="center">
        <v-col cols="6" md="3" lg="3">
          <v-alert
            :value="!!error"
            close-text="Close"
            color="red"
            dense
            dark
            dismissible
            elevation="24"
          >
            {{ error }}
          </v-alert>
        </v-col>
      </v-row>
      <UserProfileDetails
            :name="profile.name"
            :login="profile.login"
            :avatar_url="profile.avatar_url"
            :company="profile.company"
            :followers="profile.followers"
            :public_repos="profile.public_repos"
            :loading="loading"
            />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import UsersAPI from './api/users';
import UserProfileDetails from "@/components/UserProfileDetails";
/*
  <UserProfileDetails
            :name="user.name"
            :login="user.login"
            :avatar_url="user.avatar_url"
            :company="user.company"
            :followers="user.followers"
            :public_repos="user.public_repos"
            />
*/

//import axios from 'axios';
export default {
  name: 'App',

  created() {
    console.log("Loading user ...");
    //this.fetch();
  },

  components: {
    HelloWorld,
    UserProfileDetails,
  },

  data: () => ({
    profile: {},
    loading: false,
    error: null,
    name: ''
  }),
  
  methods:{
    fetch(name){
    console.log("Fetching profile ....");
    console.log(name);
    this.loading = true;
    setTimeout(() => {
    UsersAPI.getUser(name).then(response => {
        console.log(response);
        this.profile = response.data;
        this.loading = false;
      }).catch(e => {
        this.error = e;
        console.log(e)
      }
      
        
      )}, 1000)
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
