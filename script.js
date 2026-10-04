// Get all gallery items
const galleryItems = document.querySelectorAll(".gallery-item");

// Get lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


// Store current image number
let currentIndex = 0;


// Create array of images
let images = [];


// Add all gallery images to array
galleryItems.forEach(function(item) {

    const image = item.querySelector("img");

    images.push(image.src);

});


// Open lightbox
function openLightbox(index) {

    currentIndex = index;

    lightboxImg.src = images[currentIndex];

    lightbox.classList.add("show");

}


// Close lightbox
function closeLightbox() {

    lightbox.classList.remove("show");

}


// Next image
function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex];

}


// Previous image
function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex];

}


// Add click event to gallery items
galleryItems.forEach(function(item, index) {

    item.addEventListener("click", function() {

        openLightbox(index);

    });

});


// Close button
closeBtn.addEventListener("click", function() {

    closeLightbox();

});


// Next button
nextBtn.addEventListener("click", function() {

    nextImage();

});


// Previous button
prevBtn.addEventListener("click", function() {

    previousImage();

});


// Close when clicking outside image
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// Keyboard navigation
document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("show")) {
        return;
    }


    if (event.key === "ArrowRight") {

        nextImage();

    }


    if (event.key === "ArrowLeft") {

        previousImage();

    }


    if (event.key === "Escape") {

        closeLightbox();

    }

});


// Category filtering
const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class
        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        // Add active class
        button.classList.add("active");


        // Get selected category
        const category =
            button.getAttribute("data-category");


        // Show/hide images
        galleryItems.forEach(function(item) {

            const itemCategory =
                item.getAttribute("data-category");


            if (
                category === "all" ||
                category === itemCategory
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});