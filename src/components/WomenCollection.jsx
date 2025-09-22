import { Link } from "react-router-dom";

function WomenCollection() {
  return (
    <div
      className="relative rounded-xl h-64 flex items-center justify-center text-white text-2xl font-bold"
      style={{
        backgroundColor: "#FDCB26",
      }}
    >
      <img
        src="./women-collection.png"
        alt="women-collection"
        className="absolute bottom-0 w-[200px]"
      />

      <h5 className="absolute top-[15px] text-[1rem]  z-10">
        Women's collection
      </h5>

      <button className="absolute bottom-[15px] bg-stone-800 text-[1rem]  px-4  rounded-md z-10  ">
        <Link to="/women-collections">Browse</Link>
      </button>
    </div>
  );
}

export default WomenCollection;
