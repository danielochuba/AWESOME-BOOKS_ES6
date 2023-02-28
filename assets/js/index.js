import { BookList } from "../modules/book.js";
import {
     listSection, addNewSection, contactSection, listLink, addNewLink, contactLink 
    } from '../modules/target.js';

import { DateTime } from '../modules/luxon.js';

const dateData = DateTime.now();

// Create a new instance of the BookList class
const bookList = new BookList();
bookList.displayBooks();

listLink.addEventListener('click', () => {
  listSection.style.display = 'block';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addNewLink.addEventListener('click', () => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'block';
  document.querySelector('.date-time').innerHTML = dateData.toLocaleString(DateTime.DATETIME_MED);
});

  const navButtons = document.querySelectorAll('.link-item');

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
  // Remove the active class from all buttons
    navButtons.forEach((btn) => {
   btn.classList.remove('active');
  });

  // Add the active class to the clicked button
  button.classList.add('active');
});
});
