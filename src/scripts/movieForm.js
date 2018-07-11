const $ = require("jquery")

const newMovieForm = Object.create({}, {
        buildNewMovieForm: {
            value: () => {
                const $divContainer = document.querySelector(".div--container")

                const $newMovieDiv = $("<div>").attr("id", "form--placeholer").text("Add Moive to Your Unwatched List").appendTo($divContainer)

                const $paraNewMovie= $("<p>").appendTo($newMovieDiv)

                const $newMovieTitleLabel = $("<label>").attr("for", "form--title").text("Movie Title").appendTo($paraNewMovie)

                const $newMovieTitleInput = $("<input>").attr("id", "form--title").appendTo($newMovieTitleLabel)

                const $newMoviePlotLabel = $("<label>").attr("for", "form--plot").text("Movie Plot").appendTo($paraNewMovie)

                const $newMoviePlotInput = $("<input>").attr("id", "form--plot").appendTo($newMoviePlotLabel)

                const $newMovieDurationLabel = $("<label>").attr("for", "form--duration").text("Duration").appendTo($paraNewMovie)

                const $newMovieDurationInput = $("<input>").attr("id", "form--duration").appendTo($newMovieDurationLabel)

                const $newMovieSave = $("<button>").attr("id", "form--Save").text("Save").appendTo($newMovieDiv)

            }

        }
    })

module.exports = newMovieForm;