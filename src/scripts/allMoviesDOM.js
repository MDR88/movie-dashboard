const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const moviesToDOM = Object.create({}, {
    passMovies: {
        value: () => {

            databaseMethods.getAllMovies().then((responseMoviesArray) =>
                responseMoviesArray.forEach(element => {
                    const $movieRef = $("<article>").addClass("savedMovie").attr("id", `${element.id}`)

                    const $paraMovieTitle = $("<p>").text(`${element.title}`).appendTo($movieRef)

                    const $paraMoviePlot = $("<p>").text(`${element.plot}`).appendTo($paraMovieTitle)

                    const $paraMovieDuration = $("<p>").text(`${element.duration}`).appendTo($paraMoviePlot)

                    const $checkBOX = $("<input>").attr("id", "checkbox-watched").attr("type", "checkbox").value(`${element.watched}`).appendTo($movieRef)

                    const $secRef = document.getElementById("moviesContentSection")

                    $movieRef.appendTo($secRef)
                })
            )
        }
    }
})
module.exports = moviesToDOM;