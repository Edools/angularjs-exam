<template>
  <div class="card">
    <header class="card__header">
      <img class="card__image" :src="avatar" alt="Imagem do repositório">
    </header>
    <main class="card__body">
      <a :href="url" target="_blank">
        <h3 class="card__title">{{ name }}</h3>
      </a>
      <p class="card__text">{{ description }}</p>
    </main>
    <footer class="card__footer">
      <p>{{ language }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['name', 'avatar', 'description', 'language', 'url']
}
</script>

<style lang="scss" scoped>
  @import '../sass/mixins.scss';
  @import '../sass/colors.scss';

  .card {
    @include box-shadow;
    border: 1px solid $border-color;
    flex: 1 0 25%;
    height: 300px;
    margin: 15px;
    min-width: 5em;
    width: 250px;
  }
  .card__header {
    @include background;
    height: 80px;
    padding: 5px 0;
    text-align: center;
  }
  .card__image {
    height: 100%;
  }
  .card__body {
    min-height: 120px;
    padding: 0 10px;
  }
  .card__title {
    text-align: center;
    word-wrap: break-word;
  }
  .card__footer,
  .card__text {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    max-height: 72px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
  }
  .card__text {
    word-break: break-all;
  }
  .card__footer {
    border-top: 1px solid $border-color;
  }
</style>
