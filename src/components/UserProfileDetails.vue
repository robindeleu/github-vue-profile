<template>

  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
  >
    <v-card-title>
      <span class="title font-weight-light">{{login }}, works @{{company}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      <p class="title font-weight-light">Followers: {{followers}}</p>
      <v-divider></v-divider>
      <p class="title font-weight-light">Repository's: {{public_repos}}</p>
      <v-divider></v-divider>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            :src="avatar"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
    <v-overlay :value="loading" absolute>
      <v-progress-circular
        indeterminate
        color="primary"
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-card>
</template>

<script>
//import AvatarPlaceholder from "@/assets/default-profile-icon.jpg"
import AvatarPlaceholder from "@/assets/fluppe.png"

export default {
  name: "UserProfileDetails",

  props: {
    login: {
      type: String,
      default: 'KingFluppe'
    },
    name: {
      type: String,
      default: 'Filip Van Saksen Coburg '
    },
    company: {
      type: String,
      default: 'Belgique'
    },
    avatar_url: {
      type: String,
      default: null
    },
    followers: {
      type: Number,
      default: 11492641
    },
    public_repos: {
      type: Number,
      default: 0
    },
    loading: {
      type: [Boolean, String],
      default: false
    },
  },

  methods:{
  },

  computed: {
    avatar() {
      return this.avatar_url ? this.avatar_url : AvatarPlaceholder;
    }
  }
};
</script>