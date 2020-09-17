<template>
  <section>
    <Loader v-if="isLoading" />
    <section v-if="hasTimesComponent">
      <MovieTickets />
    </section>
  </section>
</template>

<script>
import Loader from "../components/SmallComponents/Loader"
import MovieTickets from "../components/BigComponents/MovieTickets"
export default {
  name: "Tickets",
  components: {
    Loader,
    MovieTickets
  },
  data() {
    return {
      isLoading: true,
      hasTimesComponent: false
    }
  },
  created() {
    this.$store.dispatch("fetchMovieDetails").then(() => {
      this.isLoading = false
    })
    this.$store.dispatch("fetchMovieTickets").then(() => {})
    this.$store.dispatch("fetchMoviePrices").then(() => {
      this.hasTimesComponent = true
    })
  }
}
</script>

<style></style>
