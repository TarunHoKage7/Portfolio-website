function displayContent(projSec, projName){
    return function () {
        document.querySelector(".title").innerHTML = induvidualProjectData[projSec][projName].title;
        document.querySelector(".title-img").src = induvidualProjectData[projSec][projName].img;
        document.querySelector(".description").innerHTML = induvidualProjectData[projSec][projName].summary;
        document.querySelector("iframe").href = induvidualProjectData[projSec][projName].link;
    }
}

modules.export = displayContent;