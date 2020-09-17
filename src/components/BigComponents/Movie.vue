<template>
  <div class="card">
    <router-link :to="movieDetailsPath">
      <Poster
        class="card-img-top"
        :posterName="movie.poster_path"
        :alt="movie.original_title"
      />
    </router-link>
    <div class="card-body">
      <h3 class="box-title">{{ movie.title }}</h3>
      <p class="box-text">{{ movie.overview }}</p>
    </div>

    <div class="card-footer">
      <small>Average Rating : {{ movie.vote_average.toFixed(1) }}</small>
    </div>
  </div>
</template>

<script>
import Poster from "../SmallComponents/Poster"
export default {
  name: "Movie",
  components: {
    Poster
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },

  computed: {
    movieDetailsPath() {
      return `/movie/${this.movie.id}`
    }
  }
}
</script>

<style scoped>
.card {
  min-width: 250px;
  float: left;
  margin-bottom: 40px;
}
</style>
