const mainContainer = document.querySelector("main");
const apiAdress = "https://fakestoreapi.com";

async function apiCall(url) {

  const response = await fetch(url);

  console.log(response);
}

apiCall(apiAdress);