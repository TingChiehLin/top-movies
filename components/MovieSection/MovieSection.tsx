import MovieItem from "../MovieItem";

const MovieSection = () => {
  return (
    <div className="grid grid-cols-4 gap-16">
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  ); 
};

export default MovieSection;
