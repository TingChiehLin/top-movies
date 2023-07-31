import movies from "./top_100_movies.json";

export const getAllFilterGenres = () => {
  const allGenres = movies.map((movie) => movie.genre);
  const mergeArray = allGenres.flat();
  const genreArray = Array.from(new Set(mergeArray));
  const newArray = ['Any',...genreArray];
  return newArray;
};
