let experiencePageIndex = 0;
let experiencePageData = {
    0: {
        title: "Cloud Support Associate Intern - AWS",
        time: "March 2023 - July 2023",
        about: "-This is my ongoing internship at amazon web services(aws) as a cloud support associate intern.",
        imgsrc: "/assets/aws_img.png",
        imgalt: "aws logo"
    },

    1: {
        title: "Public Speaker -ACM Student chapter",
        time: "November 2021 - Present",
        about: "-Spoke at workshops on Web-development, Github, and cybersecurity. I was also a part of the organizing committee of a city-level hackathon.",
        imgsrc: "/assets/acm_img.png",
        imgalt: "acm logo"
    },

    2: {
        title: "Machine Learning intern at zebo.ai",
        time: "April 2021 - May 2021",
        about: "-We have worked on a model to classify & localize a target feature. I was coordinating our team's tasks and was part of the data mining team.",
        imgsrc: "/assets/zebo_img.png",
        imgalt: "zebo logo"
    }
};

//if(checkMobileScreen()) {
//    setTimeout( eraseDisplay(), 10000);
//}
addEventListeners();
changeExperienceTileData();

function addEventListeners() {
    document.getElementById("closeAlert").addEventListener("click", closeAlertClicked);  
    document.getElementById("right-arrow").addEventListener("click", rightArrowClicked);  
    document.getElementById("left-arrow").addEventListener("click", leftArrowClicked);
}

function closeAlertClicked() {
    document.getElementById("alert").style.display = "none";
}

function leftArrowClicked() {
    if(experiencePageIndex == 0) {
        experiencePageIndex = 2;
    }
    else {
        experiencePageIndex -= 1;
    }

    changeExperienceTileData(experiencePageIndex);
}

function rightArrowClicked() {
    experiencePageIndex = (experiencePageIndex + 1) % Object.keys(experiencePageData).length;
    //document.querySelector("#experience-tile > h2").innerText =  
    changeExperienceTileData(experiencePageIndex);
}

 function changeExperienceTileData(index = experiencePageIndex) {
    //let awaitingAnimationText = experiencePageData[index]["title"];
    //animateAwaitingAnimationText(awaitingAnimationText);
    document.querySelector("#experience-tile > h2").innerText = experiencePageData[index]["title"];
    document.querySelector("#experience-tile > h4").innerText = experiencePageData[index]["time"];
    document.querySelector("#experience-tile > p").innerText = experiencePageData[index]["about"];
    document.querySelector("#experience-tile > img").src = experiencePageData[index]["imgsrc"];
    document.querySelector("#experience-tile > p").alt = experiencePageData[index]["imgalt"];
}

function checkMobileScreen(){
    if (typeof screen.orientation !== 'undefined') { 
        alert("This website was built as a desktop-first site. For a better experience, I recommend you open this website on a bigger screen(laptop or desktop).");
        return 1;
    }
    return 0;
}

function eraseDisplay() {
    
    document.querySelector("body").style.display = "none";
    document.querySelector("body").style.backgroundColor = "#121e26"
    document.querySelector("body").style.border = "3px solid #00d5ff";
}


/*async function animateTileData(awaitingAnimationArray) {
    const animateArray = await Promise.all([
		animateWord(awaitingAnimationArray[0]), 
        animateWord(awaitingAnimationArray[1]),
		animateWord(awaitingAnimationArray[2])
	])
}*/

/*async function animateAwaitingAnimationText(awaitingAnimationText) {
    document.querySelector("#experience-tile > h2").innerText = temp();

    function temp() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;
        clearInterval(interval);
        let iteration = 0;

        interval = setInterval(() => {

            document.querySelector("#experience-tile > h2").innerText
            .split("")
            .map((letters, index) => {

                if(index < iteration) {
                    return awaitingAnimationText[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            }).join("");

            if(iteration >= awaitingAnimationText.length){
                clearInterval(interval);
            }

            iteration += 1;

        }, 30);

    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    document.querySelector("#experience-tile > h2").onmouseover = event => {  
      let iteration = 0;
    
      clearInterval(interval);
    
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
      
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 30);
    }
}*/