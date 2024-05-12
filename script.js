document.addEventListener('DOMContentLoaded', function() {
    var reasons = [
        "Your unwavering love and support",
        "Your kindness and compassion towards everyone",
        "Your endless sacrifices for our family",
        "Your ability to make any place feel like home",
        "Your strength and resilience in the face of challenges"
    ];

    var reasonElement = document.getElementById('reason');

    // Randomly select a reason why mom is special
    var randomIndex = Math.floor(Math.random() * reasons.length);
    var selectedReason = reasons[randomIndex];
    reasonElement.textContent = selectedReason;

    // Slideshow
    var currentIndex = 0;
    var images = document.querySelectorAll('#slideshow img');
    var intervalId = setInterval(changeImage, 3000); // Change image every 3 seconds

    function changeImage() {
        images[currentIndex].style.display = 'none'; // Hide current image
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
        images[currentIndex].style.display = 'block'; // Show next image
    }
});
