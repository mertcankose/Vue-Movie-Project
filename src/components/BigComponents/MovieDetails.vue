<template>
  <div>
    <section v-for="(movie, index) in details" :key="index + 'movie'">
      <component :is="selectedComponent" v-if="movie.id == movieId">
        <div>Runtime: "{{ runTime(movie.runtime) }}"</div>
        <div>Average Rating: {{ movie.vote_average.toFixed(1) }}</div>
        <div>Production Company: {{ movie.production_companies[0].name }}</div>
        <div>Release Date: {{ movie.release_date }}</div>
        <h4 class="mt-4">Cast</h4>
        <img
          v-for="(person, index) in movie.cast"
          :key="index + 'person'"
          :src="castAvatar(person.profile_path)"
          class="cast-avatar"
          alt
        />
        <h4 class="mt-4">Trailers</h4>
        <a
          class="trailer"
          v-for="(trailer, index) in trailers"
          :key="index"
          :href="trailer.url"
          target="_blank"
        >
          <span></span>
          <img :src="trailer.thumbnail" />
        </a>
        <router-link :to="movieTickets" class="ticket-button btn btn-success"
          >Get Tickets</router-link
        >
      </component>
    </section>
  </div>
</template>

<script>
import MainMovie from "./MainMovie"
import { mapGetters } from "vuex"
export default {
  name: "movieDetails",
  components: {
    MainMovie
  },
  data() {
    return {
      selectedComponent: MainMovie
    }
  },
  methods: {
    runTime(time) {
      var hour = parseInt(time / 60)
      var minute = time - hour * 60
      return `${hour}h ${minute}m`
    },
    castAvatar(path) {
      return `https://image.tmdb.org/t/p/w45${path}`
    }
  },

  computed: {
    ...mapGetters({
      details: "getDetails"
    }),
    movieId() {
      return this.$route.params.id
    },
    trailers() {
      const trailers = []
      this.details.forEach(movie => {
        if (this.movieId == movie.id) {
          movie.videos.results.forEach(video => {
            if (video.type === "Trailer") {
              trailers.push({
                thumbnail: `https://i.ytimg.com/vi/${video.key}/sddefault.jpg`,
                url: `https://youtube.com/watch?v=${video.key}`
              })
            }
          })
        }
      })
      return trailers
    },
    movieTickets() {
      return {
        name: "Tickets",
        params: { id: this.movieId }
      }
      //return `/movie/${this.movieId}/tickets`;
    }
  }
}
</script>

<style scoped>
.cast-avatar {
  width: 50px;
  height: 54px;
  border-radius: 45px;
  border: 2px solid #fff;
  margin-right: 10px;
}
.trailer {
  width: 150px;
  height: 110px;
  display: inline-block;
  margin-right: 20px;
  position: relative;
}
.trailer span {
  background-image: url(http://f.acet.me/LXIk.png);
  background-size: 75px 75px;
  position: absolute;
  width: 75px;
  height: 75px;
  top: 18px;
  left: 36px;
  display: block;
}
.ticket-button {
  position: absolute;
  top: 0;
  right: 60px;
}
</style>
