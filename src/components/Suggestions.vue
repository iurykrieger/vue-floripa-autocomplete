<template>
  <div class="suggestions"
    v-if="suggestions.length"
  >
    <ul>
      <li
        v-for="suggestion in suggestions"
        :key="suggestion.id"
      >
        <CEJSMovie :movie="suggestion"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Movie from './Movie'

export default {
  name: 'Suggestions',
  components: {
    'CEJSMovie': Movie
  },
  data () {
    return {
      apiKey: 'aa9d0b9e',
      apiUrl: 'https://www.omdbapi.com/',
      suggestions: []
    }
  },
  props: {
    query: {
      type: String,
      required: true
    }
  },
  watch: {
    query (query) {
      fetch(`${this.apiUrl}?s=${query}&r=json&apikey=${this.apiKey}`)
        .then(response => response.json())
        .then(result => result.Search || [])
        .then(movies => {
          this.suggestions = movies.map(movie => ({
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            id: movie.imdbID,
            url: `https://imdb.com/title/${movie.imdbID}`
          }))
        })
    }
  }
}
</script>

<style scoped>
.suggestions {
  background: #FFFFFF;
  border: 1px solid #6666;
  position: absolute;
  z-index: 2;
}

.suggestions ul {
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
}

.suggestions ul li {
  margin: 0 0 8px 0;
}
</style>
