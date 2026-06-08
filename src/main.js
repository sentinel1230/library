import "./style.css";
import { searchBooks } from "./utils/api.js";
import { BookList } from "./components/BookList.js";

import { saveFavorite, removeFavorite } from "./utils/storage.js";
import { renderFavorites } from "./components/FavoriteBookList.js";

import { debounce } from './utils/debounce.js'

renderFavorites();

const cardListWrapper = document.querySelector(".card-list-wrapper");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const emptyErrorElement = document.querySelector(".empty-search-error");
const lengthErrorElement = document.querySelector(".length-search-error");
const loader = document.querySelector(".loader");

cardListWrapper.addEventListener("click", (e) => {
  const btn = e.target.closest(".favorite-btn");
  if (!btn) return;

  const book = {
    id: btn.dataset.id,
    title: btn.dataset.title,
    author: btn.dataset.author,
    cover: btn.dataset.cover,
  };

  if (btn.classList.contains("active")) {
    removeFavorite(book.id);
    btn.classList.remove("active");
  } else {
    saveFavorite(book);
    btn.classList.add("active");
  }

  renderFavorites();
});

document.querySelector(".favorite-books").addEventListener("click", (e) => {
  const btn = e.target.closest(".favorite-remove-btn");
  if (!btn) return;

  const id = btn.dataset.id;
  removeFavorite(id);

  const cardBtn = cardListWrapper.querySelector(`.favorite-btn[data-id="${id}"]`)
  if (cardBtn) cardBtn.classList.remove('active')

  renderFavorites();
});

const handleSearch = debounce(async () => {
  const query = searchInput.value.trim()

  if (!query) {
    emptyErrorElement.classList.remove('active')
    lengthErrorElement.classList.remove('active')
    cardListWrapper.innerHTML = ''
    return
  }

  if (query.length < 3) {
    lengthErrorElement.classList.add('active')
    cardListWrapper.innerHTML = ''
    return
  }
  lengthErrorElement.classList.remove('active')

  loader.classList.add('active')
  cardListWrapper.innerHTML = ''

  const books = await searchBooks(query)
  loader.classList.remove('active')
  cardListWrapper.innerHTML = BookList(books)
}, 600)

searchInput.addEventListener('input', handleSearch)
