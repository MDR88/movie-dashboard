const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const checkboxEdit = Object.create(
  {},
  {
    checkboxChangeValue: {
      value: () => {
        const $newMovieTitleValue = document
          .getElementById("checkbox-watched")
          .val();
        $("#checkbox-watched").val(this.checked);
        $("#checkbox-watched").change(function() {
          if (this.checked) {
            $(this).prop("checked", returnVal);
          }
          $("#checkbox-watched").val(this.checked);
        });
        databaseMethods.archiveWatchedMovies();
      }
    }
  }
);

module.exports = checkboxEdit;
