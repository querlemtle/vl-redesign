import NewsArticle from "@/components/NewsArticle";
import { getNewsById } from "@/lib/mongodb/db";

export default async function Page({ params }) {
  const { id } = params;
  const { news } = await getNewsById(id);

  return <NewsArticle news={news[0]} />;
}
