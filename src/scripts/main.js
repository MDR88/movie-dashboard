const $ = require("jquery");
const mainMovieDashboard = require("./homeBuild");
const buildMoviesToDOM = require("./buildMoviesToDOM");
const databaseMethods = require("./databaseMethods");

mainMovieDashboard.buildDashboard();
buildMoviesToDOM.passMovies();
