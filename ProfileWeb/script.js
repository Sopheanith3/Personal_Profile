// Get references to the DOM elements
const resumeButton = document.getElementById('resumeButton');
const pdfSlideshow = document.getElementById('pdfslideshow');
const closeBtn = document.getElementById('closeBtn');

// Event listener for the resume button
resumeButton.addEventListener('click', function() {
    pdfSlideshow.style.display = 'flex'; // Show the slideshow
});

// Event listener for the close button
closeBtn.addEventListener('click', function() {
    console.log('Close button clicked');
    pdfSlideshow.style.display = 'none'; // Hide the slideshow
});

document.getElementById("linkedinButton").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/sopheanith-ny3/", "_blank");
});

document.getElementById("githubButton").addEventListener("click", function() {
    window.open("https://github.com/Sopheanith3", "_blank");
});
