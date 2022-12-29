import { Heading } from "@/components/ui/typography/Heading";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import { reducer } from "@/helpers/reducer";
import { reviewsList } from "@/utils/data";
import clsx from "clsx";
import { lazy, useReducer } from "react";
import Layout from "./Layout";

const LazyLoadImage = lazy(() => import("../ui/LazyLoadImage"));

const Reviews = () => {
  const [selected, dispatch] = useReducer(reducer, "Andri Firmansyah");

  return (
    <Layout bgColor="lavender">
      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        {reviewsList
          .filter((review) => review.name === selected)
          .map((review) => (
            <div key={review.id} className="flex flex-col items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center md:flex-row">
                <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md md:mr-10">
                  <LazyLoadImage
                    className="h-full w-full cursor-pointer transition-all ease-in-out hover:scale-110"
                    src={review.img}
                    alt={`${review.name}'s Picture`}
                  />
                </div>
                <div className="my-3 text-center md:my-0 md:text-start">
                  <Heading as="h3" className="text-[30px] font-bold">
                    {review.name}
                  </Heading>
                  <Paragraph className="text-xl font-semibold">{review.job}</Paragraph>
                  <div className="mt-4 md:w-[604px]">
                    <Paragraph className="text-lg font-normal text-indigo">{review.desc}</Paragraph>
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-3 flex space-x-4 md:mb-3 md:mt-10">
                {review.select.map((selectedName) => (
                  <button
                    key={selectedName}
                    onClick={() => dispatch({ name: selectedName })}
                    className={clsx(
                      "w-fit rounded-full p-2.5",
                      selected === selectedName ? "bg-fulvous" : "bg-[#422CC6]"
                    )}
                    aria-label="select review button"
                  ></button>
                ))}
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Reviews;
