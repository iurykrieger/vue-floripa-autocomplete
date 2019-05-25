<template>
  <div id="autocomplete">
    <VueForm
      :action="action"
      :query-param="queryParam"
      v-model="query"
    />
    <VueSuggestions
      :query="query"
    />
  </div>
</template>

<script>
import VueForm from './VueForm.vue'
import VueSuggestions from './VueSuggestions'

export default {
  name: 'VueAutocomplete',
  components: {
    VueForm,
    VueSuggestions
  },
  data () {
    return {
      query: ''
    }
  },
  props: {
    queryParam: {
      type: String,
      default: 'q'
    },
    action: {
      type: String,
      default: 'https://www.google.com/search'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
