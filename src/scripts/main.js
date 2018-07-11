const $ = require("jquery");
const mainMovieDashboard = require("./homeBuild")
const moviesToDOM = require("./allMoviesDOM")

mainMovieDashboard.buildDashboard()
moviesToDOM.passMovies()
