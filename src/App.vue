<template>
  <div id="app">
    <Autocomplete class="autocomplete"/>
  </div>
</template>

<script>
import Autocomplete from './components/Autocomplete'

export default {
  name: 'app',
  components: {
    Autocomplete
  },
  data () {
    return {
      query: '',
      queryParam: 'q',
      action: 'https://www.google.com/search'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.autocomplete {
  width: 600px;
}
</style>
