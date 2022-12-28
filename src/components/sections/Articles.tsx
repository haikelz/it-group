import { CardArticle } from "@/components/ui/cards/CardArticle";
import { Heading } from "@/components/ui/typography/Heading";
import { articlesList } from "@/utils/data";
import Layout from "./Layout";

const Articles = () => {
  return (
    <Layout>
      <div id="articles">
        <Heading as="h2" className="text-center font-semibold">
          Artikel & Journal
        </Heading>
        <div className="mt-14 grid grid-cols-1 grid-rows-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {articlesList.map((article) => (
            <CardArticle
              key={article.id}
              date={article.date}
              thumbnail={article.thumbnail}
              title={article.title}
              preview={article.preview}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
