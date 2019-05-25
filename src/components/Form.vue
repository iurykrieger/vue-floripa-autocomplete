<template>
  <form
    :action="action"
    id="autocomplete-form"
  >
    <VueFloripaInput
      :value="query"
      @input="onQueryChange"
      :name="queryParam"
    />
    <VueFloripaButton />
  </form>
</template>

<script>
import Button from './Button'
import Input from './Input'

export default {
  name: 'Form',
  components: {
    'VueFloripaButton': Button,
    'VueFloripaInput': Input
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
