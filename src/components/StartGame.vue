<template>
  <div>
    <div class="columns">
      <div class="column is-one-quarter">

      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Seu Deck</h1>
        <UserCard :login="playerCard.login" :deckLength="getPlayerDeck.length" @onSelectedItem="onSelectedUserItem" :showContent="true"></UserCard>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Deck adversário</h1>
        <UserCard :login="cpuCard.login" :deckLength="getCPUDeck.length" ref="cpuCard" :showContent="showCpuCard"></UserCard>
      </div>
    </div>

  </div>
</template>

<script>
import UserCard from "./UserCard";
import GitHubService from "@/services/github";
import { mapGetters } from "vuex";

const gitHubService = new GitHubService();

export default {
  components: {
    UserCard
  },

  computed: {
    ...mapGetters(["getPlayerDeck", "getCPUDeck"])
  },

  data() {
    return {
      playerCard: "",
      cpuCard: "",
      showCpuCard: false
    };
  },

  methods: {
    onSelectedUserItem(info) {
      this.showCpuCard = true;

      const playerProfile = info.profile;
      const cpuProfile = this.$refs.cpuCard.profile;

      const playerValue = info.profile[info.prop];
      const cpuValue = cpuProfile[info.prop];

      let position = 0;

      if (info.prop.indexOf("_at") >= 0) {
        const playerDate = +new Date(playerValue);
        const cpuDate = +new Date(cpuValue);

        position = playerDate - cpuDate;
      } else {
        position = playerValue - cpuValue;
      }

      let toast = {
        message: "Empate",
        type: "is-warning"
      };

      if (position !== 0) {
        const infoEvent = {
          player: playerProfile,
          cpu: cpuProfile,
          position
        };

        this.$store.commit("savingPlayingEvent", infoEvent);

        if (position > 0) {
          toast = {
            message: "Vitória!",
            type: "is-success"
          };
        } else {
          toast = {
            message: "Derrota!",
            type: "is-danger"
          };
        }
      }

      this.$toast.open(toast);

      setTimeout(() => {
        this.showCpuCard = false;
        this.$store.commit("shuffleDecks");
        this.showCards();
      }, 2000);
    },

    showCards() {
      const playerDeck = this.getPlayerDeck;
      const cpuDeck = this.getCPUDeck;

      if (cpuDeck.length === 0) {
        alert("Você venceu");
      } else if (playerDeck.length === 0) {
        alert("Vocẽ perdeu");
      } else {
        this.playerCard = playerDeck[0];
        this.cpuCard = cpuDeck[0];
      }
    }
  },

  mounted() {
    gitHubService
      .allUsers()
      .then(response => response.data)
      .then(users => this.$store.commit("creatingDecks", users))
      .then(this.showCards);
  }
};
</script>
