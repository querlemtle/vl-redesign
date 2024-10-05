import { getProducts } from "@/lib/mongodb/db";
import ProductsOverview from "@/components/ProductsOverview";

export default async function Shop() {
  const { products } = await getProducts();
  
  return (
    <ProductsOverview productsData={products} />
  );
}
