import FliterBar from "@/components/FliterBar";
import MovieSection from "@/components/MovieSection/MovieSection";
import SearchBar from "@/components/SearchBar/SearchBar";

const Home = () => {
  const handleSearch = () => {
    console.log("onChange");
  };
  return (
    <div>
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-4xl">Top 100 Movies</h1>
        <SearchBar
          id={"search-movie"}
          type={"text"}
          name={"search-movie"}
          value={""}
          placeholder="Type movie name"
          // onChange={handleSearch}
        />
      </div>
      <FliterBar />
      <MovieSection />
    </div>
  );
};

export default Home;
