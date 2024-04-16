document.addEventListener("DOMContentLoaded", function() {
    let stt = document.querySelector(".scroll-to-top");

    window.onscroll = function() {
        if (window.scrollY > 400) {
            stt.style.display = "block";
        } else {
            stt.style.display = "none";
        }
    };
});
