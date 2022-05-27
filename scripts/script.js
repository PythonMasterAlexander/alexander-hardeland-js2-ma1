const mainContainer = document.querySelector("main");

//Remember to read docs and get the right address
const webUrl = "https://fakestoreapi.com/products/categories";

async function apiCall(url) {

  try {
    const response = await fetch(url);
    const apiReturn = await response.json();
    console.log(apiReturn);
  }

  catch(error) {
    console.log(error)
  }
}

apiCall(webUrl);