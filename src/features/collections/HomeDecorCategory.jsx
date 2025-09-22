import { getHomeDecor } from "../../services/apiShop";
import CategoryPage from "./CategoryPage";

export async function homeDecorLoader() {
  return await getHomeDecor();
}
function HomeDecorCategory() {
  return <CategoryPage title="Home Decor" />;
}

export default HomeDecorCategory;
