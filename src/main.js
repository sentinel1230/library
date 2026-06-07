import './style.css'
import { searchBooks } from './utils/api.js'
import { BookList } from './components/BookList.js'

const cardListWrapper = document.querySelector('.card-list-wrapper')
const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')
const emptyErrorElement = document.querySelector('.empty-search-error')
const lengthErrorElement = document.querySelector('.length-search-error')
const loader = document.querySelector('.loader')

searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim()
  if (!query) {
    emptyErrorElement.classList.add('active')
    return
  }
  emptyErrorElement.classList.remove('active');

  if (query.length < 3) {
    lengthErrorElement.classList.add('active')
    return
  }
  lengthErrorElement.classList.remove('active');

  loader.classList.add('active');
  cardListWrapper.innerHTML = '';

  const books = await searchBooks(query)
  loader.classList.remove('active');
  
  cardListWrapper.innerHTML = BookList(books)
})