const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = navbarMenu.querySelector(".close-btn");
const showPoupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const closePoupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

closeMenuBtn.addEventListener("click", () => menuBtn.click());

showPoupBtn.addEventListener("click", ()=> {
    document.body.classList.toggle("show-popup");
});

closePoupBtn.addEventListener("click", ()=> showPoupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        // console.log(link.id);
        formPopup.classList[link.id === "signup-link" ? 'add':'remove']("show-signup");
    })
})
