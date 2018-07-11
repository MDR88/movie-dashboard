const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const checkboxEdit = Object.create({}, {
  checkboxChangeValue: {
    value: () => {
      $("#checkbox-watched").val(this.checked);
      $("#checkbox-watched").change(function () {
        if (this.checked) {
          var returnVal = confirm("Are you sure?");
          $(this).prop("checked", returnVal);
        }
        $("#checkbox-watched").val(this.checked);
        databaseMethods.deleteMovie();
      })
    }
  }
})

module.exports = checkboxEdit
