const countryName = new URLSearchParams(location.search).get("name");


const countryFlagimg = document.querySelector(".main-img-country");
const countryNameH1 = document.querySelector(".heading-name")
const nativeName = document.querySelector("#native-name")
const population = document.querySelector("#Population")
const region = document.querySelector("#region")
const subRegion = document.querySelector("#sub-region")
const capital = document.querySelector("#capital")
const domain = document.querySelector("#domain")
const currency = document.querySelector("#currencies")
const language = document.querySelector("#languages")
const border = document.querySelector("#border-countries")

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then(([data]) => {
  console.log(data);
  countryFlagimg.src = data.flags.svg? data.flags.svg : "#"
  countryNameH1.innerText = data.name.common











  });
