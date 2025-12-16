// A. DARK MODE TOGGLE + BUTTON ANIMATION + Persistence
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

// On page load, check localStorage for saved theme
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeBtn.textContent = "Light Mode ☀️";
    } else {
        body.classList.remove("dark-mode");
        themeBtn.textContent = "Dark Mode 🌙";
    }
});

// Toggle theme with button press animation
themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Button press animation
    themeBtn.classList.add("pressed");
    setTimeout(() => themeBtn.classList.remove("pressed"), 150);

    // Update text and save to localStorage
    if (body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode ☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "Dark Mode 🌙";
        localStorage.setItem("theme", "light");
    }
});

// B. EDIT JOB TITLE
document.getElementById("editJobBtn").onclick = function () {
    let newTitle = prompt("Enter new job title:");
    if (newTitle) {
        document.getElementById("jobTitle").textContent = newTitle;
    }
};

// C. SHOW/HIDE SKILLS
document.getElementById("toggleSkillsBtn").onclick = function () {
    let skills = document.getElementById("skillsSection");
    let btn = document.getElementById("toggleSkillsBtn");

    if (skills.style.display === "none" || skills.style.display === "") {
        skills.style.display = "block";
        btn.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        btn.textContent = "Show Skills";
    }
};

// D. CHARACTER COUNTER
document.getElementById("msgBox").onkeyup = function () {
    let max = 200;
    let current = this.value.length;
    document.getElementById("counter").textContent = max - current;
};

// E. FORM VALIDATION
function validateForm() {
    let name = document.getElementById("nameField").value.trim();
    let email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in Name and Email before submitting.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// F. DATE DISPLAY
document.getElementById("dateDisplay").textContent =
    "Today's Date: " + new Date().toDateString();

// G. RANDOM QUOTE GENERATOR
document.getElementById("quoteBtn").onclick = function () {
    const quotes = [
        "Believe in yourself!",
        "Every day is a chance to improve.",
        "You are capable of amazing things.",
        "Success starts with discipline.",
        "Keep going — you're getting better!",
        "Your future is created today.",
        "Small steps every day lead to big results."
    ];
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").textContent = quotes[random];
};

// H. PROFILE PICTURE CHANGER
document.getElementById("changePicBtn").onclick = function () {
    document.getElementById("picInput").click();
};

document.getElementById("picInput").onchange = function (event) {
    let file = event.target.files[0];
    if (file) {
        document.getElementById("profilePic").src = URL.createObjectURL(file);
    }
};
