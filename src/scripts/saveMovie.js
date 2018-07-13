const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const saveMovie = Object.create(
  {},
  {
    passMovieToDatabase: {
      value: () => {
        const $newMovieTitleValue = document
          .getElementById("form--title")
          .val();

        const $newMoviePlotValue = document.getElementById("form--plot").val();

        const $newMovieDurationValue = document
          .getElementById("form--duration")
          .val();

        const newMovie = {
          title: $newMovieTitleValue,
          plot: $newMoviePlotValue,
          duration: $newMovieDurationValue,
          watched: false
        };

        databaseMethods.postMovie(newMovie);
      }
    }
  }
);

module.exports = saveMovie;
