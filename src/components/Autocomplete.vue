<template>
  <div id="autocomplete">
    <CEJSForm
      :action="action"
      :query-param="queryParam"
      v-model="query"
    />
    <CEJSSuggestions
      :query="query"
    />
  </div>
</template>

<script>
import Form from './Form.vue'
import Suggestions from './Suggestions'

export default {
  name: 'VueAutocomplete',
  components: {
    'CEJSForm': Form,
    'CEJSSuggestions': Suggestions
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
