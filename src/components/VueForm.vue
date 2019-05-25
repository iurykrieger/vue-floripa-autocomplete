<template>
  <form
    :action="action"
    id="autocomplete-form"
  >
    <VueInput
      :value="query"
      @input="onQueryChange"
      :name="queryParam"
    />
    <VueButton />
  </form>
</template>

<script>
import VueButton from './VueButton'
import VueInput from './VueInput'

export default {
  name: 'VueForm',
  components: {
    VueButton,
    VueInput
  },
  props: {
    action: {
      type: String,
      required: true
    },
    queryParam: {
      type: String,
      required: true
    },
    query: {
      type: String,
      required: true
    }
  },
  model: {
    prop: 'query',
    event: 'query-change'
  },
  methods: {
    onQueryChange (query) {
      this.$emit('query-change', query)
    }
  }
}
</script>

<style scoped>
#autocomplete-form {
  display: flex;
}

#autocomplete-form .search-button:focus {
  outline: none;
}
</style>
