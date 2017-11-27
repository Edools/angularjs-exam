import Vue from 'vue';
import Vuex from 'vuex';
import ArraysService from "@/services/arrays";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    playerDeck: [],
    cpuDeck: []
  },

  mutations: {
    creatingDecks(state, usersLists) {
      const shuffledLogins = ArraysService.shuffle(usersLists);

      const midCards = Math.ceil(shuffledLogins.length / 2);

      state.playerDeck = shuffledLogins.splice(0, midCards);
      state.cpuDeck = shuffledLogins.splice(0, midCards);
    },

    shuffleDecks(state) {
      state.playerDeck = ArraysService.shuffle(state.playerDeck);
      state.cpuDeck = ArraysService.shuffle(state.cpuDeck);
    },

    savingPlayingEvent(state, infoEvent) {

      if (infoEvent.position > 0) {
        state.playerDeck.push(infoEvent.cpu);

        const removingIndex = state.cpuDeck.findIndex(cpu => cpu.login === infoEvent.cpu.login);
        state.cpuDeck.splice(removingIndex, 1);

      } else {
        state.cpuDeck.push(infoEvent.player);

        const removingIndex = state.playerDeck.findIndex(player => player.login === infoEvent.player.login);
        state.playerDeck.splice(removingIndex, 1);
      }
    }
  },

  getters: {
    getPlayerDeck(state) {
      return state.playerDeck;
    },

    getCPUDeck(state) {
      return state.cpuDeck;
    }
  }
});

export default store;
