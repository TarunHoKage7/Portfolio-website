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

let induvidualProjectData = {
    web: {
        "worksy": {
            img: ".",
            link: "https://github.com/TarunHoKage7/worksy",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "Worksy is an upskilling, advertising, selling, and outreach application. It is also a place where you can find people from all sects of work for any tasks you have (like carpentry, plumbing, art, house help, caretakers, etc.) This application uses HTML, CSS, JS, MongoDB, ExpressJS, and NodeJS. The initial idea of this application was to help people from sectors where their primary source of advertising was through word of mouth. Using Worksy, they can advertise and display their work and experience and reach the eyes of potential clients.",
            techStack: {
                0: "HTML",
                1: "CSS",
                2: "JS",
                3: "NodeJS",
                4: "ExpressJS",
                5: "MongoDB",
            },
        },

        "Bus-Track": {
            img: "/assets/bustrack.JPEG",
            link: "https://github.com/TarunHoKage7/BusTrack",
            addnlPics: {
                0: "/assets/bustrack.JPEG",
                1: "."
            },
            summary: "Bus-Track is a transportation tracking website. It lets us track our ride(cab, bus, bike, auto, etc.) in real-time. You can use Bus-Track to share your location with others, such as family and friends, so they can know where you are. It uses the built-in geolocation API to track your location(after you've allowed it to, of course). I've built this website coz I kept missing my college bus.!This website is not deployed yet.",
            techStack: {
                0: "HTML",
                1: "CSS",
                2: "JS",
                3: "NodeJS",
                4: "ExpressJS",
                5: "MongoDB",
            },
        },

        "Tile-Game": {
            img: ".",
            link: "https://tilinator.netlify.app/",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "The tile game ('tile-inator', as I call it) is similar to the piano tile game. I built it coz I thought it was a great yet simple game. I have also added some Mario and Doofenshmirtz flavours to it. The tile-inator was built as a mobile-first game but can also be played on a desktop browser using keyboard and pointer clicks.",
            techStack: {
                0: "HTML",
                1: "CSS",
                2: "JS",
            },
        },

        "API-EXPERIMENTS": {
            img: ".",
            link: "https://myapiexpts.netlify.app/",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "This is my compilation of APIs that I have found to be interesting. I have built induvidual applications around these APIs. Though there isn't a lot of styling involved. ",
            techStack: {
                0: "HTML",
                1: "CSS",
                2: "JS",
            },
        },

        "FRONTEND-CHALLENGES": {
            img: ".",
            link: "https://frontendchallengesvskt.netlify.app",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "This website consists of a few of the frontend challenges that I have done. There are afew more at my codepen which will be updated into this site shortly.",
            techStack: {
                0: "HTML",
                1: "CSS",
                2: "JS",
            },
        },

        "WEB-CALCULATOR": {
            img: ".",
            link: "https://basicwebcalculator.netlify.app",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "This is a basic Arithmatic Calculator built for the browsers. This was one of the few that aren't built because of some problems I've faced or seen. Used HTML, CSS, and JS (image-map to build this calculator).",
            techStack: {
                0: "HTML",
                1: "CSS",
                2: "JS",
            },
        },

        "NOTEPAD-LOCALSTORAGE": {
            img: ".",
            link: "https://localnotepad.netlify.app",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "A browser based notepad Application. This application is a local storage based notepad application. A user can create and use multiple notes and has access to basic font based styling options as of now. Currently built to use local storage for persistent memory.",
            techStack: {
                0: "HTML",
                1: "CSS",
                2: "JS",
            },
        },
    },

    android: {
        "EXAMM-SNAPP": {
            img: ".",
            link: ".",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "Exam snap is an android application that was built to be a one-stop destination for all academic resources for everybody from my college. It was connected to MongoDB to allow retrieval and downloads for offline viewing capabilities. This app was built using flutter. It uses firebase to store and retrieve data.",
            techStack: {
                0: "DART",
                1: "FLUTTER",
                2: "FIREBASE",
            },
        }, 
        
        "hospital-app": {
            img: ".",
            link: ".",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "I built this app during the COVID-19 pandemic. Most of the hospitals and people were suffering due to scarcity of resources and even more hardships for patients due to their need for complete isolation. It was to be a one-stop destination for anybody needing critical resources like food, medicine, oxygen, etc. I have built this app using Flutter.",
            techStack: {
                0: "DART",
                1: "FLUTTER",
                2: "FIREBASE",
            },
        },    

        "Calculator": {
            img: ".",
            link: ".",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "This calculator was built to be connected to the cloud to retrieve all my previous calculations and queries.  It is built using flutter. It uses firebase to store all calculations in real time.",
            techStack: {
                0: "DART",
                1: "FLUTTER",
                2: "FIREBASE",
            },
        },    
    }
    ,
    iot: {
        "RFID-door-locking-system": {
            img: ".",
            link: ".",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "RFID door locking systems built with Arduino are becoming increasingly popular for securing homes, offices, and other establishments. This system works by allowing access only to those who have a valid RFID tag or card. When the user swipes their tag, the Arduino board reads the tag's unique identifier and compares it to a pre-programmed list of authorized users. If the tag is valid, the Arduino sends a signal to the locking mechanism, allowing the door to unlock. The system requires an RFID reader, a locking mechanism, an Arduino board, and some programming knowledge. The RFID reader reads the data from the RFID tag, and the Arduino board processes that data to determine whether access should be granted or not. If access is granted, the Arduino sends a signal to the locking mechanism to unlock the door.",
            techStack: {
                0: ".",
                1: "."
            },
        },

        "HOME-AUTOMATION-SYSTEM": {
            img: ".",
            link: ".",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "Home Automation:-A simple home automation system built over NodeMCU allows you to remotely control your home appliances using a Wi-Fi connection and a mobile application. The system uses a NodeMCU board, which is a low-cost microcontroller board that provides built-in Wi-Fi connectivity. To build the system, you will need some programming knowledge and experience working with electronics, as well as the Arduino IDE software tool. The system can help make your home more convenient and efficient while also providing a fun and educational project. To build a simple home automation system using NodeMCU, you will need to have some basic programming knowledge and experience working with electronics. You will also need to download and install the Arduino Integrated Development Environment (IDE), which is a software tool that is used to write and upload code to the NodeMCU board.",
            techStack: {
                0: ".",
                1: "."
            },
        },

        "Intruder-Detection-System": {
            img: ".",
            link: ".",
            addnlPics: {
                0: ".",
                1: "."
            },
            summary: "An intruder detection system built over NodeMCU is a project that uses a combination of sensors, such as PIR motion sensors, to detect when someone enters a room or opens a door. The system is built using a NodeMCU board, which is a low-cost microcontroller board that provides built-in Wi-Fi connectivity. The system works by sending notifications to your phone or email when an intrusion is detected. To build the system, you will need some programming knowledge and experience working with electronics, as well as the Arduino IDE software tool. The system provides an added layer of security for your home or office and can be a fun and educational project to build. The intruder detection system built over NodeMCU can also be expanded to include additional sensors and features, such as a loud alarm or security camera integration. The system can be programmed to detect specific intrusion patterns or send notifications to different people depending on the time of day or the severity of the intrusion. With its built-in Wi-Fi connectivity, the system can also be accessed remotely, allowing you to check the status of your home or office from anywhere with an internet connection.",
            techStack: {
                0: ".",
                1: "."
            },
        },
    },
}

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