// import img from "../public";
export const movies = [
  {
    id: 1,
    poster: "/img/2.jpg",
    name: "Awards",
  },
  {
    id: 2,
    poster: "/img/1.jpg",
    name: "Awards",
  },

  {
    id: 3,
    poster: "/img/3.jpg",
    name: "Awards",
  },
  { id: 4, poster: "/img/4.jpg", name: "Awards" },
  {
    id: 5,
    poster: "/img/5.jpg",
    name: "Awards",
  },
  {
    id: 6,
    poster: "/img/6.jpg",
    name: "Awards",
  },
];

const fullmovies = [
  {
    poster: "/img/1.jpg",
    name: "Awards",
  },
  {
    poster: "/img/2.jpg",
    name: "Awards",
  },
  {
    poster: "/img/3.jpg",
    name: "Awards",
  },
  { poster: "/img/4.jpg", name: "Awards" },
  {
    poster: "/img/5.jpg",
    name: "Awards",
  },
  {
    poster: "/img/6.jpg",
    name: "Awards",
  },
  {
    poster: "/img/7.jpg",
    name: "Awards",
  },
  {
    poster: "/img/8.jpg",
    name: "Awards",
  },
  {
    poster: "/img/9.jpg",
    name: "Awards",
  },
  {
    poster: "/img/10.jpg",
    name: "Awards",
  },
  {
    poster: "/img/11.jpg",
    name: "Awards",
  },
  {
    poster: "/img/12.jpg",
    name: "Awards",
  },
  {
    poster: "/img/13.jpg",
    name: "Awards",
  },
];

export const randomMoviesSet1 = fullmovies
  .sort(() => Math.random() - 0.5)
  .concat(fullmovies.sort(() => Math.random() - 0.5))
  .concat(fullmovies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = fullmovies
  .sort(() => Math.random() - 0.5)
  .concat(fullmovies.sort(() => Math.random() - 0.5))
  .concat(fullmovies.sort(() => Math.random() - 0.5));
