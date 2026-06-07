export async function searchBooks(query) {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&fields=title,author_name,cover_i,key,first_publish_year&limit=10`
  )
  const data = await res.json()
  return data.docs
}