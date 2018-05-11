<template>
  <div class="container" v-if="schoolFeatures">
    <div class="features">
      <div class="item" v-for="item in schoolFeatures.schoolfeatures" :key="item.id">
        <app-card
          :featureId="item.feature_id || 'Não encontrado'"
          :featureAvailable="item.available"
          :featureActive="item.active"
        />
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
    <button class="button-router" @click="$router.push('/features')">Aplicativos dísponíveis para a escola</button>
  </div>
</template>

<script>
import axios from 'axios'
import appCard from './app-card'

export default {
  name: 'school',
  components: { appCard },
  data () {
    return {
      perPage: '10',
      schoolId: this.$route.params.id,
      schoolFeatures: null
    }
  },
  methods: {
    async getSchoolFeatures (perPage) {
      const schoolFeatures = await axios.get(`/schools/${this.schoolId}/school_features?per_page=${perPage}`)
      this.schoolFeatures = schoolFeatures.data
    }
  },
  watch: {
    perPage () {
      this.perPage === 'Todos' ? this.getSchoolFeatures(this.schoolFeatures.total_count) : this.getSchoolFeatures(this.perPage)
    }
  },
  created () {
    this.getSchoolFeatures(this.perPage)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  border: 1px solid #ccc;
  box-sizing: border-box;
  .select {
    margin: 0 60px 0 auto;
    text-align: center;
    @include size(150px, 60px)
    select {
      @include select
    }
  }
}
.features {
  display: flex;
  flex-wrap: wrap;
}
.button-router {
  display: block;
  margin: 20px auto;
  @include size(320px, 60px);
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
