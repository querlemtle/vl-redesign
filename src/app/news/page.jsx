import { getNewsByPage } from "@/lib/mongodb/db";
import NewsOverview from "@/components/NewsOverview";

const itemsPerPage = 6;

export default async function News({ searchParams }) {
  const { page } = searchParams;
  const result = await getNewsByPage(page, itemsPerPage);
  const paginatedNews = result[0].paginatedResults;
  const totalCount = result[0].totalCount[0].total;

  return (
    <NewsOverview
      news={paginatedNews}
      totalCount={totalCount}
      page={Number(page)}
      itemsPerPage={itemsPerPage}
    />
  );
}
