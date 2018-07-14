const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const checkboxEdit = Object.create(
  {},
  {
    checkboxChangeValue: {
      value: () => {
        const $watchedValue = document.getElementsByClassName(
          "checkbox-watched"
        )[0];
        // $watchedValue.val(this.checked);
        $watchedValue.change(function() {
          if (this.checked) {
            $(this).prop("checked", "true");
          }
          $(".checkbox-watched").val(this.checked);
        });
        databaseMethods.archiveWatchedMovies();
      }
    }
  }
);

module.exports = checkboxEdit;
