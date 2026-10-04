// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    // Stop page from refreshing
    event.preventDefault();


    // Get user information
    const name =
        document.getElementById("name").value;


    const email =
        document.getElementById("email").value;


    // Show message
    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );


    // Clear form
    contactForm.reset();

});


// ================= RESUME =================

function downloadResume() {

    alert(
        "Please add your actual resume PDF file " +
        "and connect it to this button."
    );

}