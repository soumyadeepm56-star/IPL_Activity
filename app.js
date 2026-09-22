
// Activity 4
// Show a notification message

function showToast(message) {

    alert(message);

}




let bookButtons = document.querySelectorAll(".book-button");




bookButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

       

        showToast("Booking section opened!");

    });

});




document.getElementById("heroBookButton").addEventListener("click", function() {

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Booking section opened!");

});


// Activity 5


document.addEventListener("DOMContentLoaded", function() {

    

    let paragraph = document.getElementById("demo");


    

    paragraph.textContent =
        "IPL 2026 brings together some of the best cricket teams " +
        "for exciting matches across different stadiums in India.";

});

