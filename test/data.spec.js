import {
  filterByDirector,
  orderAzByTitle,
  orderZaByTitle,
  searchByTitle,
} from "../src/data.js";

describe("filterByDirector", () => {
  it("is a function", () => {
    expect(typeof filterByDirector).toBe("function");
  });

  it("returns peliculas de Hiroyuki Morita", () => {
    const arrayToFilter = [
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
      { title: "The Cat Returns", director: "Hiroyuki Morita" },
      { title: "Tales from Earthsea", director: "Gorō Miyazaki" },
      {
        title: "The Secret World of Arrietty",
        director: "Hiromasa Yonebayashi",
      },
    ];
    expect(filterByDirector(arrayToFilter, "Hiroyuki Morita")).toEqual([
      { title: "The Cat Returns", director: "Hiroyuki Morita" },
    ]);
  });

  it("returns peliculas de Hiromasa Yonebayashi", () => {
    const arrayToFilter = [
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
      { title: "The Cat Returns", director: "Hiroyuki Morita" },
      { title: "Tales from Earthsea", director: "Gorō Miyazaki" },
      {
        title: "The Secret World of Arrietty",
        director: "Hiromasa Yonebayashi",
      },
    ];
    expect(filterByDirector(arrayToFilter, "Hiromasa Yonebayashi")).toEqual([
      {
        title: "The Secret World of Arrietty",
        director: "Hiromasa Yonebayashi",
      },
    ]);
  });
});

describe("Sort  A - Z", () => {
  it("is a function", () => {
    expect(typeof orderAzByTitle).toBe("function");
  });

  it("order  A - Z", () => {
    const arrayToSort = [
      { title: "Spirited Away" },
      { title: "Castle in the Sky" },
    ];
    expect(orderAzByTitle(arrayToSort)).toEqual([
      { title: "Castle in the Sky" },
      { title: "Spirited Away" },
    ]);
  });
});

describe("Sort  Z - A", () => {
  it("is a function", () => {
    expect(typeof orderZaByTitle).toBe("function");
  });

  it("order  Z - A", () => {
    const arrayToSort = [
      { title: "Castle in the Sky" },
      { title: "Spirited Away" },
    ];
    expect(orderZaByTitle(arrayToSort)).toEqual([
      { title: "Spirited Away" },
      { title: "Castle in the Sky" },
    ]);
  });
});

describe("searchByTitle", () => {
  it("is a function", () => {
    expect(typeof searchByTitle).toBe("function");
  });

  it("returns 'My Neighbor Totoro'", () => {
    const arrayToSearch = [
      { title: "Castle in the Sky" },
      { title: "My Neighbor Totoro" },
    ];
    expect(searchByTitle(arrayToSearch, "totoro")).toEqual([
      { title: "My Neighbor Totoro" },
    ]);
  });
});
