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
    deleteMovie: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/movies/${id}`,
                method: "DELETE"
            })
        }
    }
})

module.exports = databaseMethods;
