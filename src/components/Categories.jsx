import { useEffect } from "react";
import gsap from "gsap";
import MenCollection from "./MenCollection";
import WomenCollection from "./WomenCollection";
import Electronics from "./Electronic";
import HomeDecor from "./HomeDecor";
import Groceries from "./Groceries";
import Shoes from "./Shoes";

function Categories() {
  useEffect(() => {
    gsap.fromTo(
      ".grid > *", // target all direct children of grid
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 m-5">
      <MenCollection />
      <WomenCollection />
      <Electronics />
      <HomeDecor />
      <Groceries />
      <Shoes />
    </div>
  );
}

export default Categories;
