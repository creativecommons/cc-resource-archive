document.addEventListener("DOMContentLoaded", function() {
    let stt = document.getElementById("stt");

    window.onscroll = function() {
        if (window.scrollY > 400) {
            stt.style.display = "block";
        } else {
            stt.style.display = "none";
        }
    };
});