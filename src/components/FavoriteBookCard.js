import heartIcon from "../assets/heart.svg";

export function FavoriteBookCard({ id, title, author, cover }) {
  return `
    <div class="favorite-item" data-id="${id}">
      ${cover && cover !== 'null'
        ? `<img class="favorite-cover" src="${cover}" alt="${title}">`
        : `<div class="favorite-cover-empty"><p>no cover</p></div>`
      }
      <div class="favorite-item-text">
        <p class="favorite-item-title">${title}</p>
        <p class="favorite-item-author">${author}</p>
      </div>
      <button class="favorite-remove-btn" data-id="${id}"><img src="${heartIcon}" alt="favorite"></button>
    </div>
  `
}