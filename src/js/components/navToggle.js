export default function() {
    const navToggle = document.querySelector(".nav-toggle")
    const navSecondary = document.querySelector(".nav--secondary")


    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("is-active")
            navSecondary.classList.toggle("is-visible")
        })
    }

}