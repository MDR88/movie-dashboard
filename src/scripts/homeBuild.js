const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

const mainMovieDashboard = Object.create({}, {
    buildDashboard: {
        value: () => {
            const $containerDiv = document.querySelector(".div--container")

            const $mainPageDiv = $("<div>").attr("id", "mainPageDiv")

            const $dashboardHeader = $("<h1>").attr("id", "dashboardHeader").text("Movie Dashboard").appendTo($mainPageDiv);

            const $addButton = $("<button>").attr("type", "button").text("Add Novie").attr("id", "addMovieButton").appendTo($mainPageDiv);

            const $contentContainerDiv = $("<div>").attr("id", "contentContainerDiv").appendTo($mainPageDiv);

            const $contentSection = $("<section>").attr("id", "ContentSection").appendTo($mainPageDiv)

            $mainPageDiv.appendTo($containerDiv)
        }
    }

})

module.exports = mainMovieDashboard