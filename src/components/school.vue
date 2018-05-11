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
      schoolId: this.$route.params.id,
      schoolFeatures: null
    }
  },
  methods: {
    async getSchoolFeatures () {
      const schoolFeatures = await axios.get(`/schools/${this.schoolId}/school_features`)
      this.schoolFeatures = schoolFeatures.data
    }
  },
  created () {
    this.getSchoolFeatures()
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
