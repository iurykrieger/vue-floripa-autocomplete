<template>
  <button type="submit">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Search'
    }
  }
}
</script>

<style scoped>
button {
  padding: 12px;
  background: #282c34;
  color: #FFFF;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bold;
}
</style>
