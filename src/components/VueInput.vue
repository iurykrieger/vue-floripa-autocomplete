<template>
  <input
    type="search"
    :value="value"
    @input="onInput"
    autocomplete="off"
  />
</template>

<script>
export default {
  name: 'VueInput',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    onInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
input {
  flex: 2;
  border: 1px solid #CCCCCC;
  border-radius: 2px;
  background: #FFFFFF;
  padding: 8px;
  font: Arial, Verdana, sans-serif;
  color: #666666;
  transition: all 300ms;
}

input:hover, input:focus {
  border-color: #414141;
  outline: 0;
}
</style>
