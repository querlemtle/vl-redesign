import { getProductById } from "@/lib/mongodb/db";
import ProductDetails from "@/components/ProductDetails";

export default async function page({ params }) {
  const { id: productId } = params;
  const { product } = await getProductById(productId);

  return <ProductDetails productData={product[0]}></ProductDetails>;
}
