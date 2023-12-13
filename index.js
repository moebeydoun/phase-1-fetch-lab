function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(jsonData => {
      // Call the renderBooks() function with the JSON data
      renderBooks(jsonData);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

// Call fetchBooks() when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

// Function to render books (replace this with your actual rendering logic)
function renderBooks(books) {
  // Replace this with your rendering logic
  console.log(books);
}