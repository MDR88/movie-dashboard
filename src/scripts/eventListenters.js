const $ = require("jquery");
const databaseMethods = require("./databaseMethods");
const mainMovieDashboard = require("./homeBuild");
const clear = require("./clear");
const buildMoviesToDOM = require("./buildMoviesToDOM");
const newMovieForm = require("./movieForm");
const saveMovie = require("./saveMovie");
const checkboxEdit = require("./checkboxEdit");

const body = document.querySelector("body");
body.addEventListener("click", () => {
  console.log(event.target);
  if (event.target.id === "add-movie-button") {
    clear();
    newMovieForm.buildNewMovieForm();
  } else if (event.target.id === "form--save") {
    saveMovie.passMovieToDatabase();
    clear();
    mainMovieDashboard.buildDashboard();
    buildMoviesToDOM.passMovies();
  } else if (event.target.className === "checkbox-watched") {
    console.log("hello?");
    checkboxEdit.checkboxChangeValue();
    clear();
    mainMovieDashboard.buildDashboard();
    buildMoviesToDOM.passMovies();
  }
});
