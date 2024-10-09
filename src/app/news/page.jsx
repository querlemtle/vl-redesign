import { getNewsByPage } from "@/lib/mongodb/db";
import NewsOverview from "@/components/NewsOverview";
import getPlaceholderImage from "@/lib/sharpImage";
import { getCldImageUrl } from "next-cloudinary";

const itemsPerPage = 6;
const imageUrl = getCldImageUrl({ src: "x0dueo3tlmhagltntq5h" });

export default async function News({ searchParams }) {
  const { page } = searchParams;
  const result = await getNewsByPage(page, itemsPerPage);
  const paginatedNews = result[0].paginatedResults;
  const totalCount = result[0].totalCount[0].total;
  const placeholderCover = await getPlaceholderImage(imageUrl);

  return (
    <NewsOverview
      news={paginatedNews}
      totalCount={totalCount}
      page={Number(page)}
      itemsPerPage={itemsPerPage}
      placeholderCover={placeholderCover}
    />
  );
}
