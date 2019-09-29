<template>
  <form
    :action="action"
    id="autocomplete-form"
  >
    <CEJSInput
      :value="query"
      @input="onQueryChange"
      :name="queryParam"
    />
    <CEJSButton />
  </form>
</template>

<script>
import Button from './Button'
import Input from './Input'

export default {
  name: 'Form',
  components: {
    'CEJSButton': Button,
    'CEJSInput': Input
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
