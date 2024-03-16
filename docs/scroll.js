let stt = document.getElementById("stt");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
stt.style.display = "block";
} else {
stt.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}