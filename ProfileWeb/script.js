// Get references to the DOM elements
const resumeButton = document.getElementById('resumeButton');
const pdfSlideshow = document.getElementById('imgslideshow');
const closeBtn = document.getElementById('closeBtn');

const aboutMeButton = document.getElementById('aboutMeButton');
const aboutMeModal = document.getElementById('aboutMeModal');
const closeAboutMeModal = document.getElementById('closeAboutMeModal');

const projectButton = document.getElementById('projectButton');
const myProject = document.getElementById('project');
const closeProject = document.getElementById('closeProject');


// Event listener for the resume button
resumeButton.addEventListener('click', function() {
    pdfSlideshow.style.display = 'flex'; // Show the slideshow
});

// Event listener for the close button
closeBtn.addEventListener('click', function() {
    pdfSlideshow.style.display = 'none'; // Hide the slideshow
});

// About Me button listener
aboutMeButton.addEventListener('click', function() {
    aboutMeModal.style.display = 'flex'; // Show About Me modal
});

// Close About Me modal
closeAboutMeModal.addEventListener('click', function() {
    aboutMeModal.style.display = 'none'; // Hide the modal
});

// Show Project modal
projectButton.addEventListener('click', function() {
    myProject.style.display = 'flex'; 
});

// Close Project modal
closeProject.addEventListener('click', function() {
    myProject.style.display = 'none'; // Hide the modal when the close button is clicked
});

// LinkedIn and GitHub button listeners
document.getElementById("linkedinButton").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/sopheanith-ny3/", "_blank");
});

document.getElementById("githubButton").addEventListener("click", function() {
    window.open("https://github.com/Sopheanith3", "_blank");
});