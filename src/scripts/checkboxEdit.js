const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const checkboxEdit = Object.create(
  {},
  {
    checkboxChangeValue: {
      value: () => {
        databaseMethods.editAMovie();
        $("#checkbox-watched").val(this.checked);
        $("#checkbox-watched").change(function() {
          if (this.checked) {
            var returnVal = confirm("Are you sure?");
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
