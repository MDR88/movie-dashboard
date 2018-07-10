const $ = require("jquery");

const databaseMethods = Object.create({}, {
    postMovie: {
        value: (movies) => {
            return $.ajax({
                url: "http://localhost:3000/movies",
                method: "POST",
                data: movies
            })
        }
    },
    getAllMovies: {
        value: () => {
            return $.ajax("http://localhost:3000/movies")
        }
    },
})

module.exports = databaseMethods;
