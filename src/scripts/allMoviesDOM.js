const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const moviesToDOM = Object.create({}, {
    passMovies: {
        value: () => {
            console.log("hello")
            databaseMethods.getAllMovies().then((responseMoviesArray) => {
                console.log(responseMoviesArray);
                responseMoviesArray.forEach(element => {
                    console.log(element)
                    const $movieRef = $("<article>").addClass("savedMovie").attr("id", `${element.id}`)

                    const $paraMovieTitle = $("<p>").text(`${element.title}`).appendTo($movieRef)

                    const $paraMoviePlot = $("<p>").text(`${element.plot}`).appendTo($paraMovieTitle)

                    const $paraMovieDuration = $("<p>").text(`${element.duration}`).appendTo($paraMoviePlot)

                    const $checkBOX = $("<input>").attr("id", "checkbox-watched").attr("type", "checkbox").val(`${element.watched}`).appendTo($movieRef)

                    const $secRef = document.getElementById("ContentSection")

                    $movieRef.appendTo($secRef)

                    console.log(responseMoviesArray);
                })
            })
        }
    }
})
module.exports = moviesToDOM;
