import { Link } from "react-router-dom";

function Shoes() {
  return (
    <div
      className="relative rounded-xl h-64 flex items-center justify-center text-white text-2xl font-bold"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #F02D30, #8D1403)`,
      }}
    >
      <img src="./shoes.png" alt="shoes" className="absolute  w-[180px]" />

      <h5 className="absolute top-[15px] text-[1rem]  z-10">Shoes</h5>

      <button className="absolute bottom-[15px] bg-stone-800 text-[1rem]  px-4  rounded-md z-10  ">
        <Link to="/shoes">Browse</Link>
      </button>
    </div>
  );
}

export default Shoes;
