"use client";

const FliterBar = () => {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div
      className="w-32 h-full bg-green-300 cursor-pointer"
      onClick={handleClick}
    >
      FliterBar
    </div>
  );
};

export default FliterBar;
