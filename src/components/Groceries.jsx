import { Link } from "react-router-dom";

function Groceries() {
  return (
    <div
      className="relative rounded-xl h-64 flex items-center justify-center text-white text-2xl font-bold"
      style={{
        backgroundColor: "#03AE64",
      }}
    >
      <img src="./grocery.png" alt="watches" className="absolute  w-[200px]" />

      <h5 className="absolute top-[15px] text-[1rem]  z-10">Groceries</h5>

      <button className="absolute bottom-[15px] bg-stone-800 text-[1rem]  px-4  rounded-md z-10  ">
        <Link to="/groceries">Browse</Link>
      </button>
    </div>
  );
}

export default Groceries;
