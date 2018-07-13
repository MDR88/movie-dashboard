const $ = require("jquery");

const databaseMethods = Object.create(
  {},
  {
    postMovie: {
      value: movies => {
        return $.ajax({
          url: "http://localhost:3000/movies",
          method: "POST",
          data: movies
        });
      }
    },
    getAllMovies: {
      value: () => {
        return $.ajax("http://localhost:3000/movies");
      }
    },
    getMovie: {
      value: id => {
        return $.ajax({
          url: `http://localhost:3000/movies/${id}`,
          method: "GET"
        });
      }
    },
    putMovie: {
      value: editMovie => {
        return $.ajax({
          url: `http://localhost:3000/movies/${editMovie.id}`,
          method: "PUT",
          data: {
            title: editMovie.title,
            plot: editMovie.plot,
            duration: editMovie.duration,
            watched: editMovie.watched,
            id: editMovie.id
          }
        });
      }
    },
    deleteMovie: {
      value: id => {
        return $.ajax({
          url: `http://localhost:3000/movies/${id}`,
          method: "DELETE"
        });
      }
    }
  }
);

module.exports = databaseMethods;
