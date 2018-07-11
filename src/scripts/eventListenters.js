const $ = require("jquery");
const databaseMethods = require("./databaseMethods");
const mainMovieDashboard = require("./homeBuild");
const clear = require("./clear")
const moviesToDOM = require("./allMoviesDOM")
const newMovieForm = require("./movieForm")
const saveMovie = require("./saveMovie")

const body = document.querySelector("body");
body.addEventListener("click", () => {
    if (event.target.id === "add-movie-button") {
        clear();
        newMovieForm.buildNewMovieForm();
    } else if (event.target.id === "form--save") {
        saveMovie.passMovieToDatabase();
        clear();
        mainMovieDashboard.buildDashboard();
        moviesToDOM.passMovies()
    } else if (event.targert.id === "checkbox-watched") {}
})