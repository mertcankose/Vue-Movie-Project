import service from "../../services/service"

const state = {
  movies: [],
  movieDetails: [],
  movieTickets: [],
  moviePrices: [],
  selectedTime: null,
  selectedTicketCounts: null
}

const getters = {
  getMovies(state) {
    return state.movies
  },
  groupedMovies(state) {
    const grouped = []
    state.movies.forEach((movie, index) => {
      if (index % 3 === 0) {
        grouped.push([])
      }
      grouped[grouped.length - 1].push(movie)
    })
    return grouped
  },
  getDetails(state) {
    return state.movieDetails
  },
  getTickets(state) {
    return state.movieTickets
  },
  getPrices(state) {
    return state.moviePrices
  },
  getCounter(state) {
    return state.counter
  }
}

//MUTATION NAMES
export const SET_MOVIES = "setMovies"
export const SET_MOVIE_DETAILS = "setMovieDetail"
export const SET_MOVIE_TICKETS = "setMovieTickets"
export const SET_MOVIE_PRICES = "setMoviePrices"
export const SET_SELECTED_TIME = "setSelectedTime"
export const SET_SELECTED_TICKET_OPTIONS = "setSelectedTicketOptions"

const mutations = {
  [SET_MOVIES](state, movies) {
    state.movies = movies
  },
  [SET_MOVIE_DETAILS](state, details) {
    state.movieDetails = details
  },
  [SET_MOVIE_TICKETS](state, tickets) {
    state.movieTickets = tickets
  },
  [SET_MOVIE_PRICES](state, prices) {
    state.moviePrices = prices
  },
  decraseCounter(state, value) {
    state.counter -= value
  },
  increaseCounter(state, value) {
    state.counter += value
  },
  [SET_SELECTED_TIME](state, time) {
    state.selectedTime = time
  },
  [SET_SELECTED_TICKET_OPTIONS](state, tickets) {
    state.selectedTicketCounts = tickets
  }
}

const actions = {
  async fetchMovies({ commit }) {
    const snapshot = await service.fetchMovies()
    commit("setMovies", snapshot.val())
  },
  async fetchMovieDetails({ commit }) {
    const snapshot = await service.fetchMovieDetails()
    commit("setMovieDetail", snapshot.val())
  },
  async fetchMovieTickets({ commit }) {
    const snapshot = await service.fetchMovieTickets()
    commit("setMovieTickets", snapshot.val())
  },
  async fetchMoviePrices({ commit }) {
    const snapshot = await service.fetchMoviePrices()
    commit("setMoviePrices", snapshot.val())
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
