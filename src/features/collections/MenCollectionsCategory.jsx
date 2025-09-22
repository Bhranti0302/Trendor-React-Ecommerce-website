import CategoryPage from "./CategoryPage";
import { getMenCollections } from "../../services/apiShop";

export async function menCollectionLoader() {
  return await getMenCollections();
}

function MenCollectionsCategory() {
  return <CategoryPage title="Men's Collection" />;
}

export default MenCollectionsCategory;
