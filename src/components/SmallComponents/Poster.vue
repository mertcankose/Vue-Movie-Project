<template>
  <img :src="posterPath" />
</template>

<script>
export default {
  props: {
    posterName: {
      type: String,
      required: true
    }
  },
  computed: {
    posterPath() {
      return `http://image.tmdb.org/t/p/w500/${this.posterName}`
    }
  }
}
</script>

<style></style>
