<template>
  <section>
    <Loader v-if="isLoading" />
    <section v-if="hasDetails">
      <MovieDetails />
    </section>
  </section>
</template>

<script>
  import Loader from "../components/SmallComponents/Loader";
  import MovieDetails from "../components/BigComponents/MovieDetails";

  export default {
    name: "Detail",
    components: {
      Loader,
      MovieDetails,
    },
    data() {
      return {
        hasDetails: false,
        isLoading: true,
      };
    },

    created() {
      this.$store.dispatch("fetchMovieDetails").then(() => {
        this.isLoading = false;
        this.hasDetails = true;
      });
    },
  };
</script>

<style scoped></style>
