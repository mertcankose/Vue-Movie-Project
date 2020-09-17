<template>
  <div>
    <section v-for="(movie, index) in details" :key="index">
      <BackdropImage
        v-if="movie.id == movieId"
        :imageName="movie.poster_path"
      />
      <div v-if="movie.id == movieId" class="container pt-5">
        <div class="row">
          <div class="col-sm-4">
            <Poster class="poster" :posterName="movie.poster_path" />
          </div>
          <div class="col-sm-8 details">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.overview }}</p>
            <slot></slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BackdropImage from "../SmallComponents/BackdropImage"
import Poster from "../SmallComponents/Poster"
import { mapGetters } from "vuex"
export default {
  name: "MainMovie",
  components: {
    BackdropImage,
    Poster
  },
  computed: {
    ...mapGetters({
      details: "getDetails"
    }),
    movieId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>
.details {
  color: #fff;
}
.details div {
  color: #ccc;
  margin-bottom: 8px;
}
</style>
