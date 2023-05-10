var page_folder = window.location.pathname.split("/");

function toggleTheme() {
    var page = document.body;
    const button = document.getElementById("button-icon");
    page.classList.toggle("dark-mode");
    if(button.classList.contains("day")) {
        if (page_folder[page_folder.length - 2] === "en") {
            button.src = "../resources/dark.png";
        } else {
            button.src = "resources/dark.png";
        }
        button.classList.toggle("day");
        saveDarkModeToCache(false);
    } else {
        if (page_folder[page_folder.length-2] === "en") {
            button.src = "../resources/light.png";
        } else {
            button.src = "resources/light.png";
        }
        button.classList.toggle("day");
        saveDarkModeToCache(true);
    }
}

function loadPage(page, title) {
    fetch("html-additions/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            var pageName = window.location.pathname.split('/').pop();

            if(pageName === page) {
                document.getElementById("header-title").innerHTML = title;
            }

            if(document.querySelector(".navbar a[href='" + pageName + "']") !== null) {
                document.querySelector(".navbar a[href='" + pageName + "']").classList.add("active");
            }
            matchTheme();
        })
}

function saveDarkModeToCache(isDarkMode) {
    localStorage.setItem("isDarkMode", isDarkMode);
}

function readDarkModeFromCache() {
    return localStorage.getItem('isDarkMode');
}

function matchTheme() {
    var isDarkMode = readDarkModeFromCache();
    
    if (!(isDarkMode === null) && (isDarkMode === "true")) {
        document.body.classList.add('dark-mode');
        if (!(page_folder[page_folder.length - 2] === null) && page_folder[page_folder.length - 2] === "en") {
            document.getElementById("button-icon").src = "../resources/light.png";
            document.getElementById("button-icon").classList.toggle("day");
        } else {
            document.getElementById("button-icon").src = "resources/light.png";
            document.getElementById("button-icon").classList.toggle("day");
        }
    } else if(!(isDarkMode === null) && !(isDarkMode === "true")) {
        if (!(page_folder[page_folder.length - 2] === null) && page_folder[page_folder.length - 2] === "en") {
            document.getElementById("button-icon").src = "../resources/dark.png";
        } else {
            document.getElementById("button-icon").src = "resources/dark.png";
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        if (!(page_folder[page_folder.length - 2] === null) && page_folder[page_folder.length - 2] === "en") {
            document.getElementById("button-icon").src = "../resources/light.png";
            document.getElementById("button-icon").classList.toggle("day");
        } else {
            document.getElementById("button-icon").src = "resources/light.png";
            document.getElementById("button-icon").classList.toggle("day");
        }
    }
}

function switchVideo(index) {
    var video = ["_BIOlnhmYv0", "AGqXFlC1jp0", "oKIjS4sdVF0"]
    document.getElementById('vactive').src = "https://www.youtube.com/embed/" + video[index];
}

function openSettings() {
    document.getElementById("settings").style.display = "block";
}

function closeSettings() {
    document.getElementById("settings").style.display = "none";
}

function newsletterPopup(event) {
    event.preventDefault();
    document.getElementById("popup").style.display = "flex";
    clearForm();
}
  
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function clearForm() {
    document.querySelector("form").reset();
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// Newsletter info im cache speichern? (boolean, string, string)
function saveRegistrationToCache(registered, name, mail) {
    localStorage.setItem("registered", registered);
    localStorage.setItem("name", name);
    localStorage.setItem("mail", mail);
}

function scrollFunction() {
    var backToTopButton = document.getElementById("back-to-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

window.onscroll = function() {
    scrollFunction();
};