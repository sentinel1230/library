import { getFavorites } from "../utils/storage";
import heartIcon from "../assets/heart.svg";

export function BookCard({ title, author, coverId, bookId, publishYear }) {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : null;

  const favorites = getFavorites();
  const isFavorite = favorites.some((b) => b.id === bookId);

  return `
    <div class="book-card">
      <div class="book-cover-wrapper">
        ${
          coverUrl
            ? `<img class="book-cover" src="${coverUrl}" alt="${title}">`
            : `<div class="book-cover-empty">No Cover</div>`
        }
        <button class="favorite-btn ${isFavorite ? "active" : ""}"
          data-id="${bookId}" 
          data-title="${title}" 
          data-author="${author}" 
          data-cover="${coverUrl}">
          <img src="${heartIcon}" alt="favorite">
          </button>
      </div>
      <div class="card-text-wrapper">
        <p class="book-title">${title}</p>
        <p class="book-author">${author}</p>
        ${publishYear ? `<p class="book-year">${publishYear}</p>` : ""}
      </div>
    </div>
  `;
}
