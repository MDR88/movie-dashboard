const $ = require("jquery");
const databaseMethods = require("./databaseMethods");
const mainMovieDashboard = require("./homeBuild")
const moviesToDOM = require("./allMoviesDOM")

mainMovieDashboard.buildDashboard()
moviesToDOM.passMovies()
