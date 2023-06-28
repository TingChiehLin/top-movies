import SearchBar from "@/components/SearchBar/SearchBar";

const Home = () => {
  const handleSearch = () => {
    console.log("onChange");
  };
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-4xl">Top 100 Movies</h1>
      <SearchBar
        id={"search-movie"}
        type={"text"}
        name={"search-movie"}
        value={""}
        placeholder="type movie name"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Home;
