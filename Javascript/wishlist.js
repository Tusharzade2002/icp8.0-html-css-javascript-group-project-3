const redirectButton = document.getElementById('redirectButton');
redirectButton.addEventListener('click', function() {
  window.location.href = "../index.html"; 
})  
// Check if localStorage is supported
function isLocalStorageSupported() {
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch (e) {
      return false;
  }
}

// Function to handle like button click
function handleLikeButtonClick() {
  var likeButton = document.getElementById('likeButton');

  likeButton.addEventListener('click', function() {
      var isLiked = JSON.parse(localStorage.getItem('isLiked')) || false;

      if (!isLiked) {
          // Add to wishlist
          var wishlistItem = {
              id: 'diamondPage', // Unique identifier for this item
              name: 'Diamond Page' // Name of the item
          };

          var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          wishlist.push(wishlistItem);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));

          // Update button text
          likeButton.textContent = 'Liked';

          // Update like status
          localStorage.setItem('isLiked', true);
      } else {
          // Remove from wishlist
          var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          wishlist = wishlist.filter(item => item.id !== 'diamondPage');
          localStorage.setItem('wishlist', JSON.stringify(wishlist));

          // Update button text
          likeButton.textContent = 'Like';

          // Update like status
          localStorage.setItem('isLiked', false);
      }
  });
}

// Function to display wishlist items on wishlist.html
function displayWishlistItems() {
  var wishlistContainer = document.getElementById('wishlistContainer');
  var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Clear previous content
  wishlistContainer.innerHTML = '';

  wishlist.forEach(function(item) {
      var itemElement = document.createElement('div');
      itemElement.textContent = item.name;
      wishlistContainer.appendChild(itemElement);
  });
}

// Initialize the functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  if (isLocalStorageSupported()) {
      handleLikeButtonClick();
  } else {
      alert('LocalStorage is not supported in your browser.');
  }
});