const main = document.querySelector("main");
const countryName = new URLSearchParams(location.search).get("name");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
    const Container = document.createElement("div");
    Container.classList.add("main");

    const borderCountries = data[0].borders
      ? data[0].borders.map((border) => `<a href="#">${border}</a>`).join("\n")
      : "None";

    Container.innerHTML = `<section class="left-main">
                    <img src="${data[0].flags.svg}" alt="">
                </section>
                <section class="right-main">
                    <h1 class="heading-name">${data[0].name?.common}</h1>
                    <div class="information">
                        <div class="info1">
                            <h3><b>Native Name : </b> ${
                              data[0].name.official
                            }</h3>
                            <h3><b>Population : </b>  ${data[0].population.toLocaleString(
                              "en-PK"
                            )}</h3>
                            <h3><b>Region : </b> ${data[0].region}</h3>
                            <h3><b>Sub Region : </b>${
                              data[0].subregion || data[0].region
                            }</h3>
                            <h3><b>Capital : </b> ${data[0].capital?.[0]}</h3>
                        </div>
                        <div class="info2">
                            <h3><b>Top Level Domain : </b>${
                              data[0].tld?.[0]
                            }</h3>
                            <h3><b>Currencies : </b> ${
                              data[0].currencies[
                                Object.keys(data[0].currencies)[0]
                              ].name
                            }</h3>
                            <h3><b>Languages : </b> ${Object.values(
                              data[0].languages
                            ).join(", ")}</h3>
                        </div>
                    </div>
                    <div class="buttons">
                        <h3><b>Border Countries : </b></h3>
                        ${borderCountries}
                    </div>
                </section>`;
    main.appendChild(Container);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
