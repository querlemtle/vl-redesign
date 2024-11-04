import { getProducts } from "@/lib/mongodb/db";
import ProductsOverview from "@/components/ProductsOverview";
import getPlaceholderImage from "@/lib/sharpImage";
import { getCldImageUrl } from "next-cloudinary";

const imageUrl = getCldImageUrl({ src: "ddk4c4dhatecgvvpv3ht" });

export default async function Shop() {
  const { products } = await getProducts();
  const placeholderCover = await getPlaceholderImage(imageUrl);
  
  return <ProductsOverview productsData={products} placeholderCover={placeholderCover} />;
}
