import { Link } from "react-router-dom";

function Electronics() {
  return (
    <div
      className="relative col-span-2 bg-pink-500 rounded-xl h-64 flex items-center justify-center text-white text-2xl font-bold"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #0C8DDD, #81C3C7)`,
      }}
    >
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <h5 className=" text-[1rem]  z-10">Electronics</h5>
          <button className=" bg-stone-800 text-[1rem]  px-4  rounded-md z-10">
            <Link to="/electronics">Browse</Link>
          </button>
        </div>
        <div>
          <img
            src="./electronics.png"
            alt="electronics"
            className=" w-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Electronics;
