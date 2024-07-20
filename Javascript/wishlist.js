    const redirectButton = document.getElementById('redirectButton');
  redirectButton.addEventListener('click', function() {
    window.location.href = "../index.html"; 
  })     
 








// Function to display wishlist items
function displayWishlist() {
    const wishlistContainer = document.getElementById('wishlist-container');
    wishlistContainer.innerHTML = '';

    wishlistItems.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');

        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
            <button onclick="removeFromWishlist(${item.id})">Remove</button>
        `;

        wishlistContainer.appendChild(wishlistItem);
    });
}

// Function to remove item from wishlist
function removeFromWishlist(itemId) {
    const index = wishlistItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
        wishlistItems.splice(index, 1);
        displayWishlist(); // Refresh wishlist display
    }
}

// Initial display of wishlist
displayWishlist();