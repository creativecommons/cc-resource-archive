document.addEventListener("DOMContentLoaded", function() {
    let stt = document.getElementById("stt");
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            stt.style.display = "block";
        } else {
            stt.style.display = "none";
        }
    }
})

    // Get a reference to the "Back To Top" button
    let sttButton = document.getElementById("stt");

    // Add a click event listener to the button
    sttButton.addEventListener("click", function(event) {
        // Prevent default anchor behavior
        event.preventDefault();

        // Get a reference to the target element with the ID "resourcenavbar"
        let targetElement = document.getElementById("resourcenavbar");

        // Check if the target element exists
        if (targetElement) {
            // Scroll to the target element
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
