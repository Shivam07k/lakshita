const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const closeBtn = document.getElementById('close');

let imageIndex = 1;
const imageFolder = 'images/'; // Folder where images are stored

// Function to load images and create gallery items
function loadImage(index) {
  const img = new Image();
  img.src = `${imageFolder}pic${index}.jpg`;

  img.onload = () => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    img.alt = `Picture ${index}`;
    imgContainer.appendChild(img);
    gallery.appendChild(imgContainer);

    img.addEventListener('click', () => {
      overlay.style.display = 'flex';
      overlayImage.src = img.src;
    });

    // Load the next image
    loadImage(index + 1);
  };

  img.onerror = () => {
    // Stop loading images if there are no more images in the folder
    console.log(`Image pic${index}.jpg not found.`);
  };
}

// Start loading images from index 1
loadImage(imageIndex);

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Adding snowflakes
for (let i = 0; i < 50; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  document.body.appendChild(snowflake);
}