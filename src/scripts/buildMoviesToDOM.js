const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const buildMoviesToDOM = Object.create(
  {},
  {
    passMovies: {
      value: () => {
        databaseMethods.getAllMovies().then(responseMoviesArray => {
          console.log(responseMoviesArray);
          responseMoviesArray.forEach(element => {
            console.log(element);

            if (element.watched === "false") {
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

              const $checkBOXlabel = $("<label>")
                .attr("for", "checkbox-watched")
                .text("Watched")
                .appendTo($paraMovieDuration);

              const $checkBOX = $("<input>")
                .attr("class", "checkbox-watched")
                .attr("type", "checkbox")
                .val("false")
                .appendTo($movieCard);

              const $buttonDelete = $("<button>")
                .attr("type", "button")
                .text("Delete Movie")
                .attr("class", "delete-button")
                .appendTo($movieCard);

              const $sectionData = document.getElementById("content-section");

              $movieCard.appendTo($sectionData);
              console.log(responseMoviesArray);
            }
          });
        });
      }
    }
  }
);
module.exports = buildMoviesToDOM;
