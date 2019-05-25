<template>
  <a :href="movie.url">
    <figure class="thumbnail">
      <img :src="movie.poster" />
    </figure>
    <div class="content">
      <span class="title">{{ movie.title }}</span>
      <span class="year">{{ movie.year }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'VueMovie',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #666666;
  display: flex;
  padding: 0 32px;
}

a:hover {
  background: #CCCCCC;
}

.thumbnail {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  max-width: 65px;
  max-height: 85px;
}

.thumbnail * {
  position: relative;
  width: 100%;
}

.thumbnail img {
  mix-blend-mode: multiply;
}

.title{
  margin: 0 0 8px 0;
  font-size: 18px;
  flex: 4;
  font-weight: bold;
}

.year {
  flex: 1;
}

figure {
  flex: 1;
  height: 100%;
  margin: 0 10px 0 0;
}

.content {
  text-align: left;
  padding: 0 22px;
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
