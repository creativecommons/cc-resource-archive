document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector(".backtotopbutton");

    window.onscroll = function() {
        if (window.scrollY > 400) {
            button.style.display = "flex";
        } else {
            button.style.display = "none";
        }
    };
});
