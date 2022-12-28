import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import Layout from "./Layout";

const Banner = () => {
  return (
    <Layout bgColor="cadet" className="items-center justify-center text-white" isMinHScreen>
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col">
          <Heading as="h1" className="font-bold text-white">
            Bergabung Dan <span className="text-fulvous">Berkembang</span> Bersama
          </Heading>
          <Paragraph className="mt-6 mb-8 text-xl font-medium">
            Ciptakan dunia teknologi yang ahli dan bertalenta untuk menjadi yang terbaik dalam
            passionnya
          </Paragraph>
          <ButtonWithArrow
            className="flex w-fit items-center justify-center space-x-4 rounded-full bg-fulvous px-4 py-2 font-semibold text-white"
            desc="Get Started"
            isWhiteArrowRight
          />
        </div>
        <div className="">
          <img className="w-[70rem]" src="/images/hero.png" alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
