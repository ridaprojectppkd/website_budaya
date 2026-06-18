/* ===========================
NAVBAR SCROLL EFFECT
=========================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(6,26,24,0.85)";
        navbar.style.backdropFilter = "blur(25px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "none";

    }

});


/* ===========================
ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===========================
REVEAL ANIMATION
=========================== */

const revealElements = document.querySelectorAll(

    ".about,.card,.gallery img,.contact-box"

);

function reveal() {

    revealElements.forEach(item => {

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/* ===========================
CARD HOVER
=========================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


/* ===========================
GALLERY EFFECT
=========================== */

const gallery = document.querySelectorAll(".gallery-grid img");

gallery.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});


/* ===========================
PARALLAX HERO
=========================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.4 + "px";

});


/* ===========================
EXPLORE BUTTON
=========================== */

const exploreBtn = document.querySelector("nav button");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.querySelector("#wisata").scrollIntoView({

            behavior: "smooth"

        });

    });

}


/* ===========================
FADE HERO CONTENT
=========================== */

window.addEventListener("scroll", () => {

    const heroContent = document.querySelector(".hero-content");

    let value = window.scrollY;

    heroContent.style.opacity = 1 - value / 700;

    heroContent.style.transform =

        `translateY(${value * 0.3}px)`;

});


/* ===========================
NUMBER ANIMATION
=========================== */

const numbers = document.querySelectorAll(".glass-card h2");

let started = false;

window.addEventListener("scroll", () => {

    const card = document.querySelector(".glass-card");

    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight && !started) {

        started = true;

        numbers.forEach(num => {

            let target = parseFloat(num.innerText);

            let count = 0;

            let speed = target / 40;

            let interval = setInterval(() => {

                count += speed;

                if (count >= target) {

                    num.innerText = num.innerText.includes("+")

                        ? target + "+"

                        : target;

                    clearInterval(interval);

                } else {

                    num.innerText =

                        num.innerText.includes("+")

                            ? Math.floor(count) + "+"

                            : count.toFixed(1);

                }

            }, 30);

        });

    }

});


/* ===========================
SMOOTH PAGE LOADING
=========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});