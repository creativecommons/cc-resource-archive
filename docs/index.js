// Get all tag list items
const tagItems = document.querySelectorAll('.tag-section li');

// Loop through the tag list items
for (let i = 0; i < tagItems.length; i++) {
  // Add a click event listener to each tag item
  tagItems[i].addEventListener('click', function() {
    // Remove the 'active' class from all tag items
    for (let j = 0; j < tagItems.length; j++) {
      tagItems[j].classList.remove('active');
    }
    // Add the 'active' class to the clicked tag item
    this.classList.add('active');

    // Get the filter value from the clicked tag item
    const filterValue = this.getAttribute('data-filter');

    // Get all resource items
    const resourceItems = document.querySelectorAll('.thumbnailbox');

    // Loop through all resource items
    for (let k = 0; k < resourceItems.length; k++) {
      // If the resource item has the filter value as a class, display it, otherwise hide it
      if (resourceItems[k].classList.contains(filterValue) || filterValue === 'all') {
        resourceItems[k].style.display = 'block';
      } else {
        resourceItems[k].style.display = 'none';
      }
    }
  });
}

