document.querySelector("form").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields before submitting.");
    } else {
        alert("Thank you for your message! We will get back to you shortly.");
        document.querySelector("form").reset();
    }
});


document.getElementById("show").addEventListener("click", function () {
    const featureSection = document.getElementById("sec-down");
    const showbutton = document.getElementById("show");

    if (  featureSection.style.display === "none" || featureSection.style.display === "") {
        featureSection.style.display = "block"; // Show section
    
    } 
    else { 
        featureSection.style.display = "none"; // Hide section
       // this is for (if we got more time) add a plus button kinda thing and toggle it with it
    }
});


document.querySelector("button[type='button']").addEventListener("click", function () {

    const confirmPurchase = confirm("Are you sure you want to buy this product?");
    
    if (confirmPurchase) {
       
        alert("Thank you for your purchase! We will process it shortly.");
    }
});
