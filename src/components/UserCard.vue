<template>
  <div class="card">
      <header class="card-header">
      <p class="card-header-title">
        Quantidade no Deck: {{deckLength}}
      </p>
    </header>

    <div class="card-content" v-if="profile.login && showContent">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="profile.avatar_url" alt="Profile Picture">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{formatedName}}
          </p>
          <p class="subtitle is-6">
            <a :href="'https://www.github.com/' + profile.login" target="_blank">@{{profile.login}}</a>
            <button class="button is-primary is-small" v-if="profile.bio" @click="showBio=!showBio">
              {{showBio?"Hide bio":"See bio"}}
            </button>

            <span class="tag is-danger" v-else>
              Sem biografia
            </span>
          </p>
        </div>
      </div>

      <div class="content">
        <p>
          Escolha a propriedade para confrontar
        </p>

        <ul>
          <li>
            <span class="tag is-info" @click="selectedItem('public_repos')">Repositories: {{profile.public_repos}}</span>
          </li>

          <li>
            <span class="tag is-info" @click="selectedItem('public_gists')">Gists: {{profile.public_gists}}</span>
          </li>

          <li>
            <span class="tag is-info" @click="selectedItem('followers')">Followers: {{profile.followers}}</span>
          </li>

          <li>
            <span class="tag is-info" @click="selectedItem('following')">Following: {{profile.following}}</span>
          </li>

          <li>
            <span class="tag is-info" @click="selectedItem('created_at')">User since: {{formatDate(profile.created_at)}}</span>
          </li>

          <li>
            <span class="tag is-info" @click="selectedItem('updated_at')">Last updated: {{formatDate(profile.updated_at)}}</span>
          </li>
        </ul>

        <div v-if="profile.location">
          {{profile.location}}
        </div>

        <div v-if="profile.blog">
          Link: <a :href="profile.blog" target="_blank">{{profile.blog}}</a>
        </div>

        <div class="bio" v-if="showBio">
          {{profile.bio}}
        </div>

      </div>
    </div>

    <div class="card-content" v-else>
       <img src="../assets/card.png" alt="Back of the card" />
       <b-loading :active.sync="isLoading"></b-loading>
    </div>
  </div>
</template>

<script>
import GitHubService from "@/services/github";

const gitHubService = new GitHubService();

export default {
  props: ["login", "deckLength", "showContent"],

  data() {
    return {
      profile: {},
      showBio: false,
      isLoading: false
    };
  },

  computed: {
    formatedName() {
      if (!this.profile.name) {
        return;
      }

      const names = this.profile.name.split(" ");

      if (names.length === 1) {
        return names[0];
      }

      return `${names[0]} ${names[names.length - 1]}`;
    }
  },

  methods: {
    selectedItem(prop) {
      this.$emit("onSelectedItem", {
        prop,
        profile: this.profile
      });
    },

    formatDate(value) {
      if (!value) {
        return "";
      }

      return new Date(value).toLocaleDateString();
    }
  },

  watch: {
    login() {
      if (this.login) {
        this.isLoading = true;

        gitHubService
          .getUser(this.login)
          .then(response => (this.profile = response.data))
          .then(() => (this.isLoading = false));
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>

