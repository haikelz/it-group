import { Paragraph } from "@/components/ui/typography/Paragraph";
import { lazy, memo } from "react";

const LazyLoadImage = lazy(() => import("../LazyLoadImage"));

type CardArticleProps = {
  date: string;
  thumbnail: string;
  title: string;
  preview: string;
};

const CardArticle = ({ date, thumbnail, title, preview }: CardArticleProps) => {
  return (
    <div className="shadow-space-cadet cursor-pointer overflow-hidden rounded-xl transition-all ease-in-out hover:scale-105">
      <LazyLoadImage className="h-fit w-full" src={thumbnail} alt={title} />
      <div className="w-fit p-7">
        <span className="font-semibold">{date}</span>
        <Paragraph className="my-4 text-lg font-semibold">{title}</Paragraph>
        <Paragraph className="my-2">{preview}</Paragraph>
        <Paragraph className="font-medium transition-all ease-in-out hover:underline">{`Read More >>`}</Paragraph>
      </div>
    </div>
  );
};

export default memo(CardArticle);
