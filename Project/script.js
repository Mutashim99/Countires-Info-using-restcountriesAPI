const allcardsContainer = document.querySelector(".all-cards");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
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
  });
