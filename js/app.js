/* ==========================================
   DOOMBOT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const notification = document.getElementById("notification");

    const buyButtons = document.querySelectorAll(".buy-btn");

    let timer = null;

    function showNotification() {

        clearTimeout(timer);

        notification.classList.add("show");

        timer = setTimeout(() => {

            notification.classList.remove("show");

        }, 3000);

    }

    buyButtons.forEach(button => {

        button.addEventListener("click", showNotification);

    });

    notification.addEventListener("click", (event) => {

        if (event.target === notification) {

            notification.classList.remove("show");

        }

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            notification.classList.remove("show");

        }

    });

});

/* ==========================================
   MOBILE MENU
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");

    const nav = document.querySelector("nav");

    if (window.innerWidth > 1024) {

        return;

    }

    const burger = document.createElement("div");

    burger.className = "burger";

    burger.innerHTML = "☰";

    header.prepend(burger);

    burger.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

        burger.classList.toggle("active");

    });

});
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2Z69SRG');</script>
<!-- End Google Tag Manager -->
