const $ = require("jquery");
const databaseMethods = require("./databaseMethods");
const clear = require("./clear");
const buildMoviesToDOM = require("./buildMoviesToDOM");

const editMovie = Object.create(
  {},
  {
    editMovieDatabase: {
      value: () => {
        const divContainer = document.querySelector(".div--container");
        const id = divContainer.id;
        const $movieTitleEditValue = document
          .getElementById("form--title")
          .val();
        const $moviePlotEditValue = document.getElementById("form--plot").val();
        const $movieDurationEditValue = document
          .getElementById("form--duration")
          .val();

        const movie = {
          title: $movieTitleEditValue,
          plot: $moviePlotEditValue,
          duration: $movieDurationEditValue,
          watched: false
        };
        databaseMethods.editAMovie(id, movie).then(() => {
          clear();
          buildMoviesToDOM.passMovies();
        });
      }
    }
  }
);
module.exports = editMovie;
