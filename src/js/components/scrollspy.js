export default function() {

    const navToggle = document.querySelector(".nav-toggle") && document.querySelector(".nav-toggle-mobile");
    const navOverlay = document.querySelector("#header #main-nav")
    const navLinks = document.querySelectorAll("#header nav a")


    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-active")
        navOverlay.classList.toggle("is-active")
    })

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("is-active")
            navOverlay.classList.remove("is-active")
        })
    })

    window.addEventListener("scroll", highlightSection)

    function highlightSection() {
        console.log("highlightSection")
        const currentPosition = window.scrollY
        const menuPanels = document.querySelectorAll(".menu-panel")

        let windowHeight = window.innerHeight;
        let scrollTop = window.scrollY;


        menuPanels.forEach(panel => {

            if (scrollTop >= panel.offsetTop - (windowHeight / 2)) {

                panel.classList.add("is-visible");
            } else if (scrollTop <= panel.offsetTop - (windowHeight / 2) && panel.classList.contains("is-visible")) {
                panel.classList.remove("is-visible");
            }
            if (scrollTop >= (panel.offsetTop + panel.clientHeight) - (windowHeight / 2) && panel.classList.contains("is-visible")) {
                panel.classList.remove("is-visible");
            }

            if (panel.classList.contains("is-visible")) {
                console.log(panel)
                navLinks.forEach(link => {
                    console.log(link)
                    if (link.getAttribute("href").includes(`#${panel.id}`)) {
                        console.log(`${panel.id} is contained in ${link.getAttribute("href")}`)
                        link.classList.add("active")
                    } else {
                        link.classList.remove("active")
                    }
                })

            }
        })

    }


}