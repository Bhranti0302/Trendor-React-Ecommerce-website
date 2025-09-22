import { Link } from "react-router-dom";

function MenCollection() {
  return (
    <div
      className="relative rounded-xl h-64 flex items-center justify-center text-white text-2xl font-bold"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #383232, #625656)`,
      }}
    >
      <img
        src="./men-collection.png"
        alt="men-collection"
        className="absolute bottom-0 w-[200px]"
      />

      <h5 className="absolute top-[15px] text-[1rem]  z-10">
        Men's collection
      </h5>

      <button className="absolute bottom-[15px] bg-stone-800 text-[1rem]  px-4  rounded-md z-10  ">
        <Link to="/men-collection">Browse</Link>
      </button>
    </div>
  );
}

export default MenCollection;
