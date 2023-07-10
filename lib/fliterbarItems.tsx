import movies from "./top_100_movies.json";

export const getAllFliterGenres = () => {
  const allGenres = movies.map((movie) => movie.genre);
  const mergeArray = allGenres.flat();
  const newArray = Array.from(new Set(mergeArray));
  return newArray;
};
