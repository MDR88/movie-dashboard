const $ = require("jquery");

const databaseMethods = Object.create(
  {},
  {
    postMovie: {
      value: movies => {
        return $.ajax({
          url: "http://localhost:3000/movies",
          method: "POST",
          data: {
            title: movies.title,
            plot: movies.plot,
            duration: movies.duration,
            watched: false,
            id: movies.id
          }
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
    editAMovie: {
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
    },
    archiveWatchedMovies: {
      value: movieID => {
        return $.ajax({
          url: `http://localhost:3000/movies/${movieID}`,
          method: "PATCH",
          data: {
            watched: true
          }
        });
      }
    }
  }
);

module.exports = databaseMethods;
