const allcardsContainer = document.querySelector(".all-cards");
const input = document.querySelector("#input")
const sort = document.querySelector(".sort-tag")
let dataAll

const darkModeToggle = document.querySelector('.right');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    dataAll = data;
    CountryCard(data)
    
  });

function CountryCard(data){
  allcardsContainer.innerHTML = ""
  data.forEach((data) => {
    const countryCardDiv = document.createElement("div");
    countryCardDiv.classList.add("card-container");

    countryCardDiv.innerHTML = `<a href="countrypage.html?name=${data.name.common}" class="card">
            <img src="${data.flags.svg}" alt="flag-pic" />
            <div class="text-area">
              <h3><b>${data.name.common}</b></h3>
              <p><b>Population:</b> ${data.population.toLocaleString("en-PK")}</p>
              <p><b>Capital:</b> ${data.capital?.[0]}</p>
              <p><b>Region:</b> ${data.region} </p>
            </div>
          </a>`;
    allcardsContainer.appendChild(countryCardDiv);
  });
  }

input.addEventListener("input", (e)=>{
  const filtereddata = dataAll.filter((data)=>{
    return data.name.common.toLowerCase().includes(e.target.value.toLowerCase()) 
  })
  console.log(filtereddata);

  CountryCard(filtereddata)
})

sort.addEventListener("change", (e)=>{
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
  .then((res)=> res.json())
  .then((data)=>{
    CountryCard(data)
  })
})
