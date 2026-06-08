const FAVORITES_KEY = 'favorites'

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
}

export function saveFavorite(book) {
  const favorites = getFavorites()
  const exists = favorites.find(b => b.id === book.id)
  if (exists) return
  favorites.push(book)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

export function removeFavorite(id) {
  const favorites = getFavorites().filter(b => b.id !== id)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}