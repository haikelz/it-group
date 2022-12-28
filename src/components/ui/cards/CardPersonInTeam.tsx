import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import clsx from "clsx";
import { lazy, memo } from "react";

const LazyLoadImage = lazy(() => import("../LazyLoadImage"));

type CardPersonInTeamProps = {
  image: string;
  job: string;
  name: string;
  desc: string;
};

export const CardPersonInTeam = memo(({ image, job, name, desc }: CardPersonInTeamProps) => {
  return (
    <div
      className={clsx(
        "relative h-fit cursor-pointer rounded-3xl bg-white transition-all ease-in-out hover:scale-105",
        name === "Kang Vian" ? "lg:-mt-8" : ""
      )}
    >
      <div className="flex flex-col items-center justify-center p-6">
        <LazyLoadImage className="w-[400px]" src={image} alt={name} />
      </div>
      <div className="w-full">
        <div className="w-fit rounded-r-full bg-gradient-to-br from-[#8A79F1] via-[#6851F6] to-cadet py-4 pr-14 pl-4 text-left text-white">
          <Heading className="font-bold" as="h4">
            {job}
          </Heading>
        </div>
      </div>
      <div className="mb-7 p-5 text-center">
        <Paragraph className="mb-5 text-[22px] font-semibold">{name}</Paragraph>
        <Paragraph className="text-lg text-indigo">{desc}</Paragraph>
      </div>
      <div className="flex w-full items-center justify-center">
        <ButtonWithArrow
          className="absolute flex items-center justify-between space-x-4 rounded-full bg-[#422CC6] py-2 pl-6 pr-2"
          desc="Follow Now"
        />
      </div>
    </div>
  );
});

CardPersonInTeam.displayName = "CardPersonInTeam";
