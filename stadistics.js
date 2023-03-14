import data from "./data/ghibli/ghibli.js";
const information = () => {
  let speciesTotal = [];
  data.films.map((item) => {
    const containerSpecies = item.people.map((i) => {
      return i.specie;
    });
    speciesTotal = [...speciesTotal, ...containerSpecies];
    return containerSpecies;
  });
  const countSpecie = {};
  speciesTotal.map((item) => {
    if (countSpecie[item]) {
      countSpecie[item]++;
    } else {
      countSpecie[item] = 1;
    }
  });
  return countSpecie;
};
const stadistics = () => {
  const countspecies = information();
  const amountSpecies = Object.values(countspecies);
  const nameSpecies = Object.keys(countspecies);
  const ctx = document.querySelector("#chart-js");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: nameSpecies,
      datasets: [
        {
          label: "# of Characters",
          data: amountSpecies,
          borderWidth: 0,
          backgrounColor: [
            "rgb(64, 224, 208)",
            "rgb(224, 255, 255)",
            "rgb(173, 216, 230)",
            "rgb(255, 250, 205)",
            "rgb(240, 128, 128)",
            "rgb(255, 182, 193)",
            "rgb(32, 178, 170)",
            "rgb(135, 206, 250)",
            "rgb(144, 238, 144)",
            "rgb(102, 205, 170)",
            "rgb(147, 112, 219)",
            "rgb(255, 228, 181)",
            "rgb(219, 112, 147)",
            "rgb(250, 128, 114)",
            "rgb(112, 128, 144)",
            "rgb(0, 128, 128)",
            "rgb(216, 191, 216)",
            "rgb(164, 224, 208)",
            "rgb(186, 85, 211)",
            "rgb(188, 143, 143)",
            "rgb(230, 230, 250)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "left",
        },
      },
    },
  });
};

stadistics();
