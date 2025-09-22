import CategoryPage from "./CategoryPage";
import { getElectronics } from "../../services/apiShop";

export async function electronicsCollectionLoader() {
  return await getElectronics();
}

function ElectronicsCategory() {
  return <CategoryPage title=" Electronics" />;
}

export default ElectronicsCategory;
