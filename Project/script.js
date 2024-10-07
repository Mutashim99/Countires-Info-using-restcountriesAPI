const allcardsContainer = document.querySelector(".all-cards")

fetch("")




const countryCardDiv = document.createElement("div")
countryCardDiv.classList.add("card-container")
countryCardDiv.innerHTML = `<a href="#" class="card">
              <img src="https://flagcdn.com/af.svg" alt="flag-pic" />
              <div class="text-area">
                <h3><b>Afghanistan</b> </h3>
                <p><b>Population:</b> </p>
                <p><b>Capital:</b> </p>
                <p><b>Region:</b> </p>
              </div>
            </a>`
allcardsContainer.appendChild(countryCardDiv)