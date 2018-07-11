const $ = require("jquery");
const databaseMethods = require("./databaseMethods");
const mainMovieDashboard = require("./homeBuild");
const clear = require("./clear")
const moviesToDOM = require("./allMoviesDOM")
const newMovieForm = require("./movieForm")
const saveMovie = require("./saveMovie")

const checkboxEdit = Object.create({}, {
    checkboxChangeValue: {
        value: () => {
            $("#checkbox-watched").prop("checked", true);
        }
    }
})