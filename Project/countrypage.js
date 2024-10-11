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
const borderTag = document.querySelector("#border-countries")

const darkModeToggle = document.querySelector('.right');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });
        
fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then(([data]) => {
    
  console.log(data);
  countryFlagimg.src = data.flags.svg? data.flags.svg : "#"
  countryNameH1.innerText = data.name.common
  nativeName.innerText = Object.values(data.name.nativeName)[0].common
  population.innerText = data.population.toLocaleString("en-US")
  region.innerText = data.region
  subRegion.innerText = data.subregion
  capital.innerText = data.capital.join(", ")
  domain.innerText = data.tld.join(", ")

  const currencies = Object.values(data.currencies)
    const currenciesarray = currencies.map(e =>{
      console.log(Object.values(e)[0]);
      return Object.values(e)[0]
    })
  currency.innerText = currenciesarray.join(", ")

  const lang = Object.values(data.languages).join(", ")
  language.innerText = lang

  if(data.borders){
  data.borders.map((border) =>{
    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    .then((res)=>res.json())
    .then((borderCountries)=>{
      const aTag = document.createElement("a")
      console.log(aTag);
      aTag.innerText = borderCountries[0].name.common
      aTag.href = `countrypage.html?name=${borderCountries[0].name.common}`
      borderTag.appendChild(aTag)
    })
  })
}
  });


