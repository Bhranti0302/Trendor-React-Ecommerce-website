import CategoryPage from "./CategoryPage";
import { getWomenCollections } from "../../services/apiShop";

export async function womenCollectionLoader() {
  return await getWomenCollections();
}

function WomenCollectionsCategory() {
  return <CategoryPage title="Women's Collection" />;
}

export default WomenCollectionsCategory;
