document.addEventListener("DOMContentLoaded", function() {
  const textElements = document.querySelectorAll('.toggle-image');
  const imageBox = document.getElementById('imagebox');

  textElements.forEach(element => {
    element.addEventListener('click', function() {
      console.log('Text clicked:', element);

      // Hide all images and the image box
      document.querySelectorAll('img').forEach(img => img.classList.add('hidden'));

      // Get the image associated with the clicked text
      const imageId = element.getAttribute('data-image');
      const image = document.getElementById(imageId);

      if (image) {
        const isHidden = image.classList.contains('hidden');

        if (isHidden) {
          // Show the image and the image box if they are hidden
          image.classList.remove('hidden');
          imageBox.classList.remove('hidden');
          console.log('Imagebox and image should now be visible.');
        } else {
          // Hide the image and the image box if they are visible
          image.classList.add('hidden');
          imageBox.classList.add('hidden');
          console.log('Imagebox and image should now be hidden.');
        }
      } else {
        console.log('No image found with ID:', imageId);
      }
    });
  });
});
