const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const moviesToDOM = Object.create(
  {},
  {
    passMovies: {
      value: () => {
        databaseMethods.getAllMovies().then(responseMoviesArray => {
          console.log(responseMoviesArray);
          responseMoviesArray.forEach(element => {
            console.log(element);

            const $movieCard = $("<article>")
              .addClass("movie-card")
              .attr("id", `${element.id}`);

            const $paraMovieTitle = $("<p>")
              .text(`${element.title}`)
              .appendTo($movieCard);

            const $paraMoviePlot = $("<p>")
              .text(`${element.plot}`)
              .appendTo($paraMovieTitle);

            const $paraMovieDuration = $("<p>")
              .text(`${element.duration}`)
              .appendTo($paraMoviePlot);

            const $checkBOX = $("<input>")
              .attr("id", "checkbox-watched")
              .attr("type", "checkbox")
              .val(`${element.watched}`)
              .appendTo($movieCard);

            const $sectionData = document.getElementById("content-section");

            $movieCard.appendTo($sectionData);
            console.log(responseMoviesArray);
          });
        });
      }
    }
  }
);
module.exports = moviesToDOM;
