<template>
  <div class="container">
    <div class="features" v-if="features">
      <div class="card" v-for="(feature, index) in features.features" :key="index">
        <span class="card-title">
          {{ feature.feature_key }} ID: {{ feature.id }}
        </span>
        <span class="card-description">
          Este aplicativo está dísponível
        </span>
      </div>
    </div>
    <div class="select">
      Itens por página
      <select v-model="perPage">
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>Todos</option>
      </select>
    </div>
    <button class="button-return" @click="$router.go(-1)">Voltar</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'features',
  data () {
    return {
      perPage: '10',
      features: null
    }
  },
  methods: {
    async getFeatures (perPage) {
      const features = await axios.get(`/features?per_page=${perPage}`)
      this.features = features.data
    }
  },
  watch: {
    perPage () {
      this.perPage === 'Todos' ? this.getFeatures(this.features.total_count) : this.getFeatures(this.perPage)
    }
  },
  created () {
    this.getFeatures(this.perPage)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.features {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  padding: 5px;
  box-sizing: border-box;
  .card {
    position: relative;
    @include size(250px, 100px);
    margin: 5px;
    border: 2px solid grey;
    border-radius: 10px;
    text-align: center;
    .card-title {
      display: inline-block;
      padding: 10px;
      width: 100%;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background: #B2FF59;
      box-sizing: border-box;
    }
  }
}

.select {
  margin: 0 60px 0 auto;
  text-align: center;
  @include size(150px, 60px)
  select {
    @include select
  }
}

.button-return {
  display: block;
  margin: 20px auto;
  @include size(220px, 60px);
  outline:none;
  text-align: center;
  border-radius:40px;
  font-weight:bold;
  letter-spacing:1px;
  cursor: pointer;
  background: #1976D2;
  border: 2px solid #1565C0;
  color: #FFF;
  text-shadow: 1px 1px 2px #000;
}
</style>
