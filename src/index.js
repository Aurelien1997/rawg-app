import routes from "./js/routes";
import { PageList } from './js/PageList.js';
import './styles/style.scss';

/* Form */ 
const form = document.getElementById('form');
form.addEventListener('submit', (e) =>{
  e.preventDefault()
  const searchInput = document.getElementById("searchInput").value;
  PageList(searchInput);
  document.getElementsByClassName("box")[0].style.display = "flex"
  showDiv.style.display = 'flex';
})

/*Show more button*/
const moreBtn = document.querySelector('#showBtn');
const showDiv = document.getElementById('showMore')

let currentIndex = 1;

moreBtn.addEventListener('click', (e) => {
  const cards = [...document.querySelectorAll('.cardGame')];
  
  for (let i = currentIndex; i < currentIndex + 3; i++) {
    if (cards[i]) {
      cards[i].style.display = 'block';      
    }
  }
  currentIndex += 3;
  
  if (currentIndex >= cards.length) {
    showDiv.style.display = 'none';
  }
})

const callRoute = () => {
    const { hash } = window.location;
    const pathParts = hash.substring(1).split('/');
  
    const pageName = pathParts[0];
    const pageArgument = pathParts[1] || '';
    const pageFunction = routes[pageName];
  
    if (pageFunction !== undefined) {
      pageFunction(pageArgument);
    }
  };
  
  window.addEventListener('hashchange', () => callRoute());
  window.addEventListener('DOMContentLoaded', () => callRoute());