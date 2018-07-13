const $ = require("jquery");
const mainMovieDashboard = require("./homeBuild");
const moviesToDOM = require("./allMoviesDOM");
const databaseMethods = require("./databaseMethods");

mainMovieDashboard.buildDashboard();
moviesToDOM.passMovies();
$("div--container").on("click", `${element.title}`, () => {
  databaseMethods.getMovie(event.target.parentNode.id);
});
