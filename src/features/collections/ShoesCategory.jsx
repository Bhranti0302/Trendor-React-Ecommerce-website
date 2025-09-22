import { getShoes } from "../../services/apiShop";
import CategoryPage from "./CategoryPage";

export async function shoesLoader() {
  return await getShoes();
}

function ShoesCategory() {
  return <CategoryPage title="Shoes" />;
}

export default ShoesCategory;
