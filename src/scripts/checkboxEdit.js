const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const checkboxEdit = Object.create(
  {},
  {
    checkboxChangeValue: {
      value: () => {
        if (event.target.className === "checkbox-watched") {
          //   console.log(event.target.parentNode.id);
          databaseMethods.getMovie(event.target.parentNode.id).then(function() {
            console.log(element);
            const $editWatched = document
              .getElementByclassName("checkbox-watched")
              .val(this.checked);
            $editWatched.change(function() {
              if (this.watched === "false") {
                $(this).prop("checked", "true");
              }
              $editWatched.val(this.checked);
            });
          });
        }
      }
    }
  }
);

// const checkboxEdit = Object.create(
//   {},
//   {
//     checkboxChangeValue: {
//       value: () => {
//         databaseMethods.editAMovie(title, plot, duration, watched, id).then(() => {
//           databaseMethods.getMovie(currentId);
//         });
//       updateCheckbox = function(movieCard) {
//         const title = card.attr("titleUpdate");
//         const plot = card.children(".plotUpdate").val();
//         const duration = card.children(".durationUpdate").val();
//         const watched = card.children(".watchedUpdate").val();

//         databaseMethods.editAMovie(title, plot, duration, "true");
//       }

module.exports = checkboxEdit;
