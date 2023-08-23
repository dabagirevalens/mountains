// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);

// Function to handle the scroll event
function handleScroll() {
    const nav = document.querySelector('.nav');

    // Get the current scroll position
    const scrollPosition = window.scrollY;
    // Check if the scroll position is greater than or equal to 80vh
    if (scrollPosition >= 0.8 * window.innerHeight) {
        nav.style.backgroundColor = '#3a496031';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
}


// Function to change the bg image if the user clicks on different section
function changeBackground(imageUrl, cls) {
    const content = document.querySelector('.content');
    content.style.backgroundImage = `url('${imageUrl}')`;

    if (cls === 'h1') {
        const h1 = document.querySelector('.h1');
        const h2 = document.querySelector('.h2');
        h1.style.color = '#414f6d';
        h2.style.color = '#b1b5be';
        h1.style.backgroundColor = '#ffffff99';
        h2.style.backgroundColor = 'inherit';
    }

    if (cls === 'h2') {
        const h1 = document.querySelector('.h1');
        const h2 = document.querySelector('.h2');
        h1.style.backgroundColor = 'inherit';
        h2.style.backgroundColor = '#ffffff99';
        h2.style.color = '#414f6d';
        h1.style.color = '#b1b5be';
    }
}




let currentImageSet = 1;

// Function to change the displayed images
function changeImages(setNumber) {
    const images = document.querySelectorAll('.images__imgs img');
    const dots = document.querySelectorAll('.dot');

    // Hide all images
    images.forEach((image) => {
        image.style.display = 'none';
    });

    // Show the corresponding set of 4 images
    for (let i = (setNumber - 1) * 4; i < setNumber * 4; i++) {
        images[i].style.display = 'block';
    }

    // Update the currentImageSet variable
    currentImageSet = setNumber;

    // Remove the 'active' class from all dots
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    // Add the 'active' class to the selected dot
    dots[setNumber - 1].classList.add('active');
}

// Add click event listeners to the dots
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeImages(index + 1);
    });
});

// Initial call to display the first set of images
changeImages(currentImageSet);