const $ = require("jquery")
const databaseMethod = require("./databaseMethods")

const saveMovie = Object.create({}, {
    passMovieToDatabase: {
        value: () => {
            const $newMovieTitleValue = document.getElementById("form--title").value;

            const $newMoviePlotValue = document.getElementById("form--plot").value;

            const $newMovieDurationValue = document.getElementById("form--duration").value

            const newMovie = {
                title: $newMovieTitleValue,
                plot: $newMoviePlotValue,
                duration: $newMovieDurationValue,
                watched: false
            }

            databaseMethod.addArticles(newMovie)
        }
    }
})

module.exports = saveMovie;