<template>
  <div>
    <header class="header">
      <Search @result="setRepositories"></Search>
    </header>
      <main class="main container" v-for="rep in repositories" :key="rep">
        <div v-for="item in rep" :key="item">
          <Card
            :name="item.name"
            :avatar="item.owner.avatar_url"
            :description="item.description"
            :language="item.language"
            :url="item.html_url">
          </Card>
        </div>
      </main>
  </div>
</template>

<script>
import Card from './components/Card'
import Search from './components/Search'

export default {
  data () {
    return {
      repositories: []
    }
  },
  methods: {
    setRepositories (value) {
      this.repositories = value
    }
  },
  components: {
    Card, Search
  }
}
</script>

<style lang="scss">
  @import './sass/mixins.scss';

  html {
    font-family: 'monospace';
  }
  .container {
    margin: 0 auto;
    max-width: 980px;
  }
  .header {
    @include background;
    height: 200px;
  }
  .main {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  @media (max-width: 563px) {
    .main {
      justify-content: center;
    }
  }
</style>
