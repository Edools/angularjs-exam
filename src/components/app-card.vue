<template>
  <div class="card">
    <div v-if="featureAvailable">
      <div>
        <h3>Feature: {{ featureId }}</h3>
      </div>
      <div :class="active ? 'on' : 'off'">{{ active ? 'ON' : 'OFF'}}</div>
      <button class="active" @click.stop="activate">Ativar</button>
      <button class="desactive" @click.stop="deactivate">Desativar</button>
    </div>
    <div v-else>
      <div>
        <h3>Feature: {{ featureId }}</h3>
      </div>
      <div class="off">OFF</div>
      <button class="active" style="cursor: not-allowed">Ativar</button>
      <button class="desactive" style="cursor: not-allowed">Desativar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app-card',
  props: {
    featureId: [String, Number],
    featureAvailable: { type: Boolean, required: true },
    featureActive: { type: Boolean, required: true }
  },
  data () {
    return {
      active: this.featureActive
    }
  },
  methods: {
    async activate () {
      await axios.put(`/school_features/${this.featureId}/activate`, {activate: true})
      this.active = true
    },
    async deactivate () {
      await axios.put(`/school_features/${this.featureId}/deactivate`, {activate: false})
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.card {
  position: relative;
  @include size(250px, 150px);
  margin: 5px;
  border: 2px solid grey;
  border-radius: 10px;
  text-align: center;
  .on {
    @include onoff;
    background: rgba(10, 233, 10, 0.6);
  }
  .off {
    @include onoff;
    background: rgba(233, 10, 10, 0.6);
  }
  .active {
    @include card-button;
    background: #fff;
    border: 2px solid #00E676;
    color: #43A047;
    &:hover {
      background: #43A047;
      border: 2px solid #00E676;
      color: #fff;
    }
  }
  .desactive {
    @include card-button;
    background: #fff;
    border: 2px solid #B71C1C;
    color: #B71C1C;
    &:hover {
      background: #D32F2F;
      border: 2px solid #B71C1C;
      color: #fff;
    }
  }
}

</style>
