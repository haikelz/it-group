import { statisticsList } from "@/utils/data";
import { Heading } from "@/components/ui/typography/Heading";
import Layout from "./Layout";
import { Paragraph } from "@/components/ui/typography/Paragraph";

const Statistics = () => {
  return (
    <Layout className="">
      <div id="statistics" className="flex w-full flex-col items-center justify-between">
        <div className="text-center">
          <Paragraph className="text-lg font-medium text-brown">JADI BAGIAN DARI KAMI</Paragraph>
          <Heading as="h2" className="text-[40px] font-semibold text-indigo">
            Jago Bersama ITGroup
          </Heading>
        </div>
        <div className="mt-14 mb-24 flex space-x-0 md:flex-row md:space-x-40">
          {statisticsList.map((statistic) => (
            <div key={statistic.id} className="flex flex-col text-center">
              <Paragraph className="text-4xl font-semibold text-[#422CC6] md:text-6xl">
                {statistic.total}
              </Paragraph>
              <Paragraph className="text-lg font-medium text-indigo">{statistic.desc}</Paragraph>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Heading as="h2" className="text-[40px] font-semibold">
            Apa Yang Mereka Katakan
          </Heading>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
