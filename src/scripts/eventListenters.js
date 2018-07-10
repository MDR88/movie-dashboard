const $ = require("jquery");
const databaseMethods = require("./databaseMethods");
const mainMovieDashboard = require("./homeBuild");
const clear = require("./clear")

const body = document.querySelector("body");
body.addEventListener("click", () => {
    if (event.target.id === "addMovieButton")
        clear();
    })