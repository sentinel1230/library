import { BookCard } from "./BookCard.js";

export function BookList(books) {
    if (!books.length) {
        return `<p class="books-empty">No books or authors found. Please try a different query.</p>`
    }
  return `
    <div class="book-grid">
      ${books
        .map((book) =>
          BookCard({
            title: book.title,
            author: book.author_name?.[0] ?? "Unknown",
            publishYear: book.first_publish_year,
            coverId: book.cover_i,
            bookId: book.key,
          }),
        )
        .join("")}
    </div>
  `;
}
