const $ = require("jquery");
const databaseMethods = require("./databaseMethods");
const mainMovieDashboard = require("./homeBuild");
const clear = require("./clear")
const moviesToDOM = require("./allMoviesDOM")

const body = document.querySelector("body");
body.addEventListener("click", () => {
    if (event.target.id === "add-movie-button")
        clear();
    })