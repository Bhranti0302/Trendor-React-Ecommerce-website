import { Link } from "react-router-dom";

function HomeDecor() {
  return (
    <div
      className="relative col-span-2 bg-pink-500 rounded-xl h-64 flex items-center justify-center text-white text-2xl font-bold"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #BD8305, #8F4E04)`,
      }}
    >
      <div className="grid grid-cols-2 items-center justify-center gap-4">
        <div className="">
          <img
            src="./home-decor.png"
            alt="electronics"
            className=" w-[200px]"
          />
        </div>
        <div className="flex flex-col items-center ">
          <h5 className=" text-[1rem]  z-10">Home Decoration</h5>
          <button className=" bg-stone-800 text-[1rem]  px-4  rounded-md z-10">
            <Link to="/home-decor">Browse</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeDecor;
