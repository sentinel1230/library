export function BookCard({ title, author, coverId, bookId, publishYear }) {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : null;

  return `
    <div class="book-card">
      <div class="book-cover-wrapper">
        ${coverUrl
          ? `<img class="book-cover" src="${coverUrl}" alt="${title}">`
          : `<div class="book-cover-empty">No Cover</div>`
        }
        <button class="favorite-btn" 
          data-id="${bookId}" 
          data-title="${title}" 
          data-author="${author}" 
          data-cover="${coverUrl}">
          <img src="/src/assets/heart.svg" alt="favorite">
          </button>
      </div>
      <div class="card-text-wrapper">
        <p class="book-title">${title}</p>
        <p class="book-author">${author}</p>
        ${publishYear ? `<p class="book-year">${publishYear}</p>` : ''}
      </div>
    </div>
  `;
}
