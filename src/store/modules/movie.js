import service from "../../services/service";

const state = {
  movies: [],
};

const getters = {
  getMovies(state) {
    return state.movies;
  },
  groupedMovies(state) {
    const grouped = [];
    state.movies.forEach((movie, index) => {
      if (index % 3 === 0) {
        grouped.push([]);
      }
      grouped[grouped.length - 1].push(movie);
    });
    return grouped;
  },
};

//MUTATION NAMES
export const SET_MOVIES = "setMovies";

const mutations = {
  [SET_MOVIES](state, movies) {
    state.movies = movies;
  },
};

const actions = {
  fetchMovies({ commit }) {
    return service.fetchMovies().then((snapshot) => {
      commit("setMovies", snapshot.val());
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
