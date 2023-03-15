import data from "./data/ghibli/ghibli.js";
const transformDataSpecies = () => {
  let totalSpecies = [];
  data.films.map((item) => {
    const moreSpecies = item.people.map((item) => {
      return item.specie;
    });

    totalSpecies = [...totalSpecies, ...moreSpecies];
    return moreSpecies;
  });

  const countSpecies = {};
  totalSpecies.map((item) => {
    if (countSpecies[item]) {
      countSpecies[item]++;
    } else {
      countSpecies[item] = 1;
    }
  });
  return countSpecies;
};
const stadistics = () => {
  const dataSpecies = transformDataSpecies();
  const amountSpecies = Object.values(dataSpecies);
  const typeSpecies = Object.keys(dataSpecies);
  const graphic = document.querySelector("#chart-js");
  new Chart(graphic, {
    type: "pie",
    data: {
      labels: typeSpecies,
      datasets: [
        {
          label: "# of Characters",
          data: amountSpecies,
          borderWidth: 0,
          backgroundColor: [
            "rgb(250, 237, 205)",
            "rgb(162, 210, 255)",
            "rgb(173, 216, 230)",
            "rgb(255, 175, 204)",
            "rgb(127, 255, 212)",
            "rgb(138, 43, 226)",
            "rgb(237, 237, 233)",
            "rgb(127, 255, 0)",
            "rgb(0, 100, 0)",
            "rgb(255, 20, 147)",
            "rgb(0, 191, 255)",
            "rgb(255, 215, 0)",
            "rgb(219, 112, 147)",
            "rgb(250, 128, 114)",
            "rgb(112, 128, 144)",
            "rgb(0, 128, 128)",
            "rgb(216, 191, 216)",
            "rgb(164, 224, 208)",
            "rgb(186, 85, 211)",
            "rgb(0, 0, 0)",
            "rgb(230, 230, 250)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "left",
          labels: {
            color: "white",
          },
        },
      },
    },
  });
};

stadistics();
