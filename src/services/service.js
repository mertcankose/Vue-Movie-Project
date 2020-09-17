import firebase from "firebase";
export default {
  fetchMovies() {
    return firebase
      .database()
      .ref("/movies")
      .once("value");
  },
  fetchMovieDetails() {
    return firebase
      .database()
      .ref("/movieDetails")
      .once("value");
  },
  fetchMovieTickets() {
    return firebase
      .database()
      .ref("/movieTimes")
      .once("value");
  },
  fetchMoviePrices() {
    return firebase
      .database()
      .ref("/ticketPrices")
      .once("value");
  },
};
//return promise
