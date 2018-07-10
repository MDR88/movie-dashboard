const $ = require("jquery");
const databaseMethods = require("./databaseMethods");

let mainMovieDashboard = Object.create({} {
    buildDashborard: {
        value: () => {
            const $containerDiv = document.querySelector(".div--container")

            const $mainPageDiv = $("<div>").attr("id", "mainPageDiv")

            const $userNameTitle = $("<h1>").attr("id", "userNameTitle").text("Movie Dashboard").appendTo($mainPageDiv);

            const $addButton = $("<button>").attr("type", "button").text("Add Novie").attr("id", "addMovieButton").appendTo($mainPageDiv);

            const $contentContainerDiv = $("<div>").attr("id", "contentContainerDiv").appendTo($mainPageDiv);

            const $contentSection = $("<section>").attr("id", "ContentSection").appendTo($mainPageDiv)

            $mainPageDiv.appendTo($containerDiv)
        }
    }

})

module.exports = mainMovieDashboard