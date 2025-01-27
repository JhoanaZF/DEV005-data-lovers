import {
  filterByDirector,
  orderAzByTitle,
  orderZaByTitle,
  searchByTitle,
} from "./data.js";

import data from "./data/ghibli/ghibli.js";

const listFilms = document.querySelector("#cards-model");
const buttonFilter = document.querySelector("#buttons-filter");
const buttonOrder = document.querySelector("#buttons-order");
const buttonSearch = document.querySelector("#buttons-search");
const buttonRestore = document.querySelector("#buttons-restore");

let dataFilms = data.films;

const showFilms = () => {
  listFilms.innerHTML = "";
  dataFilms.forEach((film) => {
    const { poster, title } = film;
    const createCard = document.createElement("article");
    createCard.classList.add("cards-data");

    createCard.innerHTML = ` 
    <figure class="fig-cards">
      <div>
        <img
          class="img-cards"
          src="${poster}"
          alt="imagen"
        />
        <p class="text-films">"${title}"</p>

      </div>
    </figure>`;
    listFilms.appendChild(createCard);
  });
};

showFilms();

buttonFilter.addEventListener("change", (e) => {
  const directorSelected = e.target.value;
  if (directorSelected === "") {
    dataFilms = data.films;
    showFilms();
  } else {
    const dataFilter = filterByDirector(data.films, directorSelected);
    dataFilms = [...dataFilter];
    showFilms();
  }
});

const directorsHTML = () => {
  const dataDirectorFilms = data.films.map((film) => {
    return film.director;
  });

  const filmsDirectorsUnique = dataDirectorFilms.filter((film, posicion) => {
    return dataDirectorFilms.indexOf(film) === posicion;
  });

  filmsDirectorsUnique.forEach((director) => {
    const createButton = document.createElement("option");
    createButton.classList.add("button-data");
    createButton.value = director;
    createButton.innerHTML = director;

    buttonFilter.appendChild(createButton);
  });
};

directorsHTML();

buttonOrder.addEventListener("change", (e) => {
  const orderSelection = e.target.value;
  if (orderSelection === "a-z") {
    const dataFilter = orderAzByTitle(dataFilms);
    dataFilms = [...dataFilter];
  } else {
    const dataFilter = orderZaByTitle(dataFilms);
    dataFilms = [...dataFilter];
  }
  showFilms();
});

buttonSearch.addEventListener("search", (e) => {
  const keyValue = e.target.value.toLowerCase();
  if (keyValue === "") {
    dataFilms = data.films;
    showFilms();
  } else {
    const dataFilter = searchByTitle(data.films, keyValue);
    dataFilms = [...dataFilter];
    showFilms();
  }
});

buttonRestore.addEventListener("click", () => {
  document.querySelector("#buttons-filter").value = "";
  document.querySelector("#buttons-order").value = "";
  document.querySelector("#buttons-search").value = "";
  dataFilms = data.films;
  showFilms();
});
