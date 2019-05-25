<template>
  <div id="app">
    <VueAutocomplete class="autocomplete"/>
  </div>
</template>

<script>
import VueAutocomplete from './components/VueAutocomplete'

export default {
  name: 'app',
  components: {
    VueAutocomplete
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
