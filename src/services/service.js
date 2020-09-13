import firebase from "firebase";
export default {
  fetchMovies() {
    return firebase
      .database()
      .ref("/movies")
      .once("value");
  },
};
//return promise
