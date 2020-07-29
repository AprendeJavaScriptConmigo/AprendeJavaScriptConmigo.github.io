/**
 * variables del estado de aplicación(state)
 */

 let tabCountries = null;
 let tabFavorites = null;

 let allCountries = [];
 let favoriteCountries = [];

 let countCountries = 0;
 let countFavorites = 0;

 let totalPopulationList = 0;
 let totalPopulationFavorites = 0;

 let numberFormat = null;

 window.addEventListener('load', () => {
    tabCountries = document.querySelector('#tabCountries');
    tabFavorites = document.querySelector('#tabFavorites');
    countCountries = document.querySelector('#countCountries');
    countFavorites = document.querySelector('#countFavorites');

    totalPopulationList = document.querySelector('#totalPopulationList');
    totalPopulationFavorites = document.querySelector('#totalPopulationFavorites');

    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();
 });

 // https://restcountries.eu/rest/v2/all
//Buscando los países en la API utilizando Async para evitar las promises
 async function fetchCountries(){
     const res = await fetch('https://restcountries.eu/rest/v2/all');
     const json = await res.json();

     allCountries = json.map(country => {
        const { numericCode, translations, population, flag } = country;

        return{
            id: numericCode,
            name: translations.pt,
            population,
            formattedPopulation: formatNumber(population),
            flag
        };
    });

    render();
 }

 function render(){
     renderCountryList();
     renderFavorites();
     renderSummary();
     handlerCountryButtons();
 }

 function renderCountryList() {
     let countriesHTML = "</br><div>";

     allCountries.forEach(country => {
         const { name, flag, id, population, formattedPopulation } = country;

         const countryHTML = `
            <div class="container-fluid">
                <div class="col-sm-2"> 
                    <a id="${id}" type="button" class="btn btn-success"> + </a> 
                </div>
                <div class="col-sm-4"> 
                    <img class="img-responsive" style="max-height: 80px; max-width: 80px;" src="${flag}" alt="${name}">
                </div>
                <div class="col-sm-6"> 
                    <p>${name}</p>
                    <p>${formattedPopulation}</p>
                </div>
            </div>
         </div>
         </br>
         `;

         countriesHTML += countryHTML;
     });
     countriesHTML += "</div>";
     tabCountries.innerHTML = countriesHTML;
 }

 function renderFavorites() {
    let favoritesHTML = "</br><div>";

    favoriteCountries.forEach(country => {
        const { name, flag, id, population , formattedPopulation} = country;

        const favoritecountryHTML = `
           <div class="container-fluid">
               <div class="col-sm-2"> 
                   <a id="${id}" type="button" class="btn btn-danger"> - </a> 
               </div>
               <div class="col-sm-4"> 
                   <img class="img-responsive" style="max-height: 80px; max-width: 80px;" src="${flag}" alt="${name}">
               </div>
               <div class="col-sm-6"> 
                   <p>${name}</p>
                   <p>${formattedPopulation}</p>
               </div>
           </div>
        </div>
        </br>
        `;

        favoritesHTML += favoritecountryHTML;
    })

    favoritesHTML += "</div>";
    tabFavorites.innerHTML = favoritesHTML;
 }


 function renderSummary() {
    countCountries.textContent = allCountries.length;
    countFavorites.textContent = favoriteCountries.length;

    const totalPopulation = allCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    }, 0);

    const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    }, 0);

    totalPopulationList.textContent = formatNumber(totalPopulation);
    totalPopulationFavorites.textContent = formatNumber(totalFavorites);
 }

 function handlerCountryButtons() {
    const countryButtons = Array.from(tabCountries.querySelectorAll('.btn-success'));
    const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn-danger'));

    countryButtons.forEach(button => {
        button.addEventListener('click', () => addToFavorites(button.id));
    });

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => removeFromFavorites(button.id));
    });

 }

 function addToFavorites(id) {
    const countryToAdd = allCountries.find(country => country.id === id);
    
    favoriteCountries = [...favoriteCountries, countryToAdd];

    favoriteCountries.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });

    allCountries = allCountries.filter(country => country.id !== id);
    render();
}

function removeFromFavorites(id) {
    const countryToRemove = favoriteCountries.find(country => country.id == id);

    allCountries = [...allCountries, countryToRemove];

    allCountries.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });

    favoriteCountries = favoriteCountries.filter(country => country.id !== id);
    render();
 }

 function formatNumber(number){
    return numberFormat.format(number);
  }