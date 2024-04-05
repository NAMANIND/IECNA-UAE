// import img from "../public";
export const movies = [
  {
    poster: "/img/airplane.webp",
    name: "Airplane",
  },
  {
    poster: "/img/family-man.webp",
    name: "Family man",
  },
  {
    poster: "/img/laboratory.webp",
    name: "Laboratory",
  },
  { poster: "/img/napoleon.webp", name: "Napoleon" },
  {
    poster: "/img/person-in-darkness.webp",
    name: "Person in Darkness",
  },
  {
    poster: "/img/scary-building.webp",
    name: "Scary Building",
  },
  { poster: "/img/stars.webp", name: "Stars" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
