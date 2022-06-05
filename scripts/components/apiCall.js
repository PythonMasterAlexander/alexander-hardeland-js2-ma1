import { mainContainer } from "../constants/constants.js";

export default async function apiCall(url) {

  try {
    const response = await fetch(url);
    const apiReturn = await response.json();

    mainContainer.innerHTML = "";
  
    for(let i = 0; i < apiReturn.length; i++) {
      
      const title = apiReturn[i].title;
      const price = apiReturn[i].price;

      let html = `
        <div class="main__api-content-container">
          <h2>${title}</h2>
          <p class="main__api-content-container__paragraph">${price} $</p>
          <i class="fa-solid fa-heart"></i>
        </div>`;

      mainContainer.innerHTML += html;
    }
  }

  catch(error) {
  }
}