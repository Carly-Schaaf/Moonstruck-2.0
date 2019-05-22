$(() => {
    const emailInput = document.getElementById("email-input");
    let email = "";
    emailInput.addEventListener("change", (e) => {
        e.preventDefault();
        email += e.target.value
    })
    const mapForm = document.getElementsByClassName("map-form")[0];
    mapForm.addEventListener("submit", (e) => {
        emailInput.value = "."
        const interval = setInterval(() => {
            emailInput.value += "."
        }, 600)
        e.preventDefault();
        sendEmail(email).then(() => {
            clearInterval(interval)
            emailInput.value = "check your inbox :)"
        }, (error) => {
                clearInterval(interval);
                emailInput.value = "hm, that email's not valid";
                email = "";
            });
    })
    
    const sendEmail = () => {
        emailjs.init("user_UxeLdiW1OeBWci89CbGWV");
        var service_id = "default_service";
        var template_id = "template_pPWZiqLS";
        return emailjs.send(service_id, template_id, {"email": email})
        }

    const watch = document.getElementById("click-watch")
    const video = document.getElementById("video")
    const about = document.getElementById("click-about")
    const aboutSection = document.getElementById("about")
    const team = document.getElementById("click-team")
    const teamSection = document.getElementById("team")

    watch.addEventListener("click", (e) => {
        if (!aboutSection.classList.contains("hide")) {
            aboutSection.classList.add("hide")
        }
        if (!teamSection.classList.contains("hide")) {
            teamSection.classList.add("hide")
        }
        if (!video.classList.contains("hide")) {
            return;
        } else {
            video.classList.toggle("hide");
        }
    })
    about.addEventListener("click", (e) => {
        if (!video.classList.contains("hide")) {
            video.classList.toggle("hide")
        }
        if (!teamSection.classList.contains("hide")) {
            teamSection.classList.add("hide")
        }
        if (!aboutSection.classList.contains("hide")) {
            return;
        } else {
            aboutSection.classList.toggle("hide");
        }
    })
    team.addEventListener("click", (e) => {
        if (!video.classList.contains("hide")) {
            video.classList.toggle("hide")
        }
        if (!aboutSection.classList.contains("hide")) {
            aboutSection.classList.add("hide")
        }
        if (!teamSection.classList.contains("hide")) {
            return;
        } else {
            teamSection.classList.toggle("hide");
        }
    })
    const moon = document.getElementById("moon");
    window.onload = () => {
        moon.classList.add("moon-hover");
        const isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            moon.classList.remove("moon-hover");
        }
    }

  
})