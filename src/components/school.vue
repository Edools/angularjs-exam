<template>
  <div class="wrapper">
    <img src="../../static/school.png" alt="school">
    <div class="container" v-if="schoolFeatures && features">
      <div class="item" v-for="item in schoolFeatures.schoolfeatures" :key="item.id">
        <app-card
          :featureId="item.feature_id || 'Não encontrado'"
          :featureAvailable="item.available"
          :featureActive="item.active"
        />
      </div>
    </div>
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
      schoolFeatures: null,
      features: null
    }
  },
  methods: {
    async getFeatures () {
      const features = await axios.get('/features')
      this.features = features.data
    },
    async getSchoolFeatures () {
      const schoolFeatures = await axios.get(`/schools/${this.schoolId}/school_features`)
      this.schoolFeatures = schoolFeatures.data
    }
  },
  created () {
    this.getFeatures()
    this.getSchoolFeatures()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.wrapper {
  img {
    display: block;
    margin: 0 auto;
    @include size(150px, 150px)
  }
}
.container {
  display: flex;
  flex-wrap: wrap;
  @include size(100%)
  border: 1px solid #ccc;
  box-sizing: border-box;
}

</style>
