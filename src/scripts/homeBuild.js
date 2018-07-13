const $ = require("jquery");

const mainMovieDashboard = Object.create(
  {},
  {
    buildDashboard: {
      value: () => {
        const $containerDiv = document.querySelector(".div--container");

        const $mainPageDiv = $("<div>").attr("id", "main-page-div");

        const $dashboardHeader = $("<h1>")
          .attr("id", "dashboard-header")
          .text("Movie Dashboard")
          .appendTo($mainPageDiv);

        const $addButton = $("<button>")
          .attr("type", "button")
          .text("Add Movie")
          .attr("id", "add-movie-button")
          .appendTo($mainPageDiv);

        const $contentSection = $("<section>")
          .attr("id", "content-section")
          .appendTo($mainPageDiv);

        $mainPageDiv.appendTo($containerDiv);
      }
    }
  }
);

module.exports = mainMovieDashboard;
