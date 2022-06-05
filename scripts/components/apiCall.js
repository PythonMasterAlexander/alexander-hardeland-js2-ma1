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
        <div>
          <h2>${title}</h2>
          <p>${price}</p>
        </div>`;

      mainContainer.innerHTML += html;
    }
  }

  catch(error) {
  }
}