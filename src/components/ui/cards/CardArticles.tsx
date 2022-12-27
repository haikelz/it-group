import { Paragraph } from "@/components/ui/typography/Paragraph";
import { lazy, memo } from "react";

const LazyLoadImage = lazy(() => import("../LazyLoadImage"));

type CardArticlesProps = {
  date: string;
  thumbnail: string;
  title: string;
  preview: string;
};

export const CardArticles = memo(({ date, thumbnail, title, preview }: CardArticlesProps) => {
  return (
    <div className="shadow-space-cadet cursor-pointer overflow-hidden rounded-xl transition-all ease-in-out hover:scale-105">
      <LazyLoadImage className="w-full" src={thumbnail} alt={title} />
      <div className="w-fit p-7">
        <span className="font-semibold">{date}</span>
        <Paragraph className="my-4 text-lg font-semibold">{title}</Paragraph>
        <Paragraph className="my-2">{preview}</Paragraph>
        <Paragraph className="font-medium transition-all ease-in-out hover:underline">{`Read More >>`}</Paragraph>
      </div>
    </div>
  );
});
