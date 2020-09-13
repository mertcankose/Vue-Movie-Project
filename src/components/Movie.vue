<template>
  <div class="card">
    <router-link :to="movieDetailsPath">
      <img
        class="card-img-top"
        :src="posterPhoto"
        :alt="movie.original_title"
      />
    </router-link>
    <div class="card-body">
      <h3 class="box-title">{{ movie.title }}</h3>
      <p class="box-text">
        {{ movie.overview }}
      </p>
    </div>

    <div class="card-footer">
      <small>Average Rating : {{ movie.vote_average.toFixed(1) }}</small>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Movie",
    props: {
      movie: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        posterPhoto: "http://image.tmdb.org/t/p/w185/" + this.movie.poster_path,
      };
    },
    computed: {
      movieDetailsPath() {
        return `/movie/${this.movie.id}`;
      },
    },
  };
</script>

<style scoped>
  .card {
    min-width: 250px;
    float: left;
    margin-bottom: 40px;
  }
</style>
