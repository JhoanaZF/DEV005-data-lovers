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

const renderizarFilms = () => {
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

renderizarFilms();

buttonFilter.addEventListener("change", (e) => {
  const directorSelected = e.target.value;
  if (directorSelected === "") {
    dataFilms = data.films;
    renderizarFilms();
  } else {
    const dataFilter = filterByDirector(data.films, directorSelected);
    dataFilms = [...dataFilter];
    renderizarFilms();
  }
});

const directorsHTML = () => {
  const dataFilms = data.films.map((film) => {
    return film.director;
  });

  const filmsDirectorsUnique = dataFilms.filter((film, posicion) => {
    return dataFilms.indexOf(film) === posicion;
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
  renderizarFilms();
});

buttonSearch.addEventListener("search", (e) => {
  const keyValue = e.target.value.toLowerCase();
  if (keyValue === "") {
    dataFilms = data.films;

    renderizarFilms();
  } else {
    const dataFilter = searchByTitle(data.films, keyValue);
    dataFilms = [...dataFilter];
    renderizarFilms();
  }
});

buttonRestore.addEventListener("click", () => {
  document.querySelector("#buttons-filter").value = "";
  document.querySelector("#buttons-order").value = "";
  document.querySelector("#buttons-search").value = "";
  dataFilms = data.films;
  renderizarFilms();
});
