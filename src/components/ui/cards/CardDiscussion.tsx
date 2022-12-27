import { Heading } from "@/components/ui/typography/Heading";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import { memo } from "react";

type CardDiscussionProps = {
  id: string;
  title: string;
  description: string;
};

export const CardDiscussion = memo(({ id, title, description }: CardDiscussionProps) => {
  return (
    <div className="shadow-space-cadet flex cursor-pointer items-center justify-start rounded-3xl p-8 transition-all ease-in-out hover:scale-105">
      <div className="flex flex-col justify-center md:flex-row md:items-center">
        <div className="mr-4 w-fit rounded-full bg-gradient-to-br from-[#9879F1] via-[#6851F6] to-cadet">
          <Heading
            as="h2"
            className="inline-flex h-14 w-14 items-center justify-center font-extrabold text-white"
          >
            {id}
          </Heading>
        </div>
        <div className="">
          <Heading as="h4" className="my-2 font-semibold">
            {title}
          </Heading>
          <Paragraph className="text-base text-[#795757]">{description}</Paragraph>
        </div>
      </div>
    </div>
  );
});
