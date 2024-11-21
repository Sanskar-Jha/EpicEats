const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const formBtns = document.querySelectorAll("#form-btns button");
signupForm.style.display = "none"

formBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
        signupForm.style.display = signupForm.style.display === "block" ? "none" : "block";
    });
});

document.querySelector("#login-form p a").addEventListener("click", () => {
    loginForm.style.display = "none"
    signupForm.style.display = "block";

});

document.querySelector(".form button[type = 'submit']").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("msg").innerText = "Successful";

    setTimeout(() => {
        document.getElementById("msg").innerText = "";
    }, 3000);
});

// Dark Mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    if (darkModeToggle.checked == true) {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
});