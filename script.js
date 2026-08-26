const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");

const body =
    document.body;


/* =========================
   MOBILE MENU
========================= */

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    body.classList.toggle("menu-open");

});


/* Close menu */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            body.classList.remove("menu-open");

        });

    });


/* ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileMenu.classList.remove("active");

        body.classList.remove("menu-open");

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealItems =
    document.querySelectorAll(
        ".project, .about-layout, .skill-row, .engine-container"
    );


revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(30px)";

    item.style.transition =
        "opacity .8s ease, transform .8s ease";

});


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealItems.forEach(item => {

    observer.observe(item);

});


/* =========================
   NAVBAR SHADOW
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 18px 50px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow =
            "0 15px 45px rgba(0,0,0,.05)";

    }

});