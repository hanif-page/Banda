// loading animation
const stopLoadingAnimation = () => {
    const body = document.querySelector("body")
    const loaderContainer = document.querySelector(".loaderContainer")

    body.classList.remove("loading")
    loaderContainer.classList.add("hide-animation")
}
window.addEventListener("load", () => {
    stopLoadingAnimation();
})

// mobile navigation
const navToggle = document.querySelector("header .nav-toggle")
const navMobile = document.querySelector(".nav-mobile")
const header = document.querySelector("header")
if(navToggle && navMobile && header)
{
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("opened")
        navMobile.classList.toggle("opened")
        header.classList.toggle("opened")
    })
}

// scroll to top 
const scrollToTopBtn = document.querySelector("footer .scroll-to-top")
if(scrollToTopBtn)
{
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault()
    
        window.scrollTo(0, 0)
    })
}

