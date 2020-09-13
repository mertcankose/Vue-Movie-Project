<template>
  <section>
    <AppHeader />
    <Loader v-if="isLoading" />
    <!--we can use $store.state.movies instead of movieList-->
    <section class="container py-5">
      <div
        class="card-deck"
        v-for="(group, index) in gropuedMovies"
        :key="index"
      >
        <Movie v-for="movie in group" :key="movie.id" :movie="movie" />
      </div>
    </section>
  </section>
</template>

<script>
  import AppHeader from "../components/AppHeader";
  import Loader from "../components/Loader";
  import Movie from "../components/Movie";
  import { mapGetters } from "vuex";
  export default {
    name: "Home",
    components: {
      AppHeader,
      Loader,
      Movie,
    },
    data() {
      return {
        isLoading: true,
      };
    },
    created() {
      this.$store.dispatch("fetchMovies").then(() => {
        this.isLoading = false;
      });
    },
    computed: {
      ...mapGetters({
        movieList: "getMovies",
        gropuedMovies: "groupedMovies",
      }),
    },
  };
</script>

<style scoped>
  /*
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
  }
  */
</style>
