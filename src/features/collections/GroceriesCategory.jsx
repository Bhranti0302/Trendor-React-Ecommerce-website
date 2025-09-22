import { getGroceries } from "../../services/apiShop";
import CategoryPage from "./CategoryPage";

export async function groceriesLoader() {
  return await getGroceries();
}

function GroceriesCategory() {
  return <CategoryPage title="Groceries" />;
}

export default GroceriesCategory;
