import { FavoriteBookCard } from './FavoriteBookCard.js'
import { getFavorites } from '../utils/storage.js'

export function renderFavorites() {
  const favoritesEl = document.querySelector('.favorite-books')
  const countEl = document.querySelector('.favorite-header-paragraph')
  const favorites = getFavorites()

  countEl.textContent = `${favorites.length} books saved`

  if (!favorites.length) {
    favoritesEl.innerHTML = `<p class="favorites-empty">No saved books yet</p>`
    return
  }

  favoritesEl.innerHTML = favorites
    .map(book => FavoriteBookCard(book))
    .join('')
}