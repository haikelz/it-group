import { CardDiscussion } from "@/components/ui/cards/CardDiscussion";
import { Heading } from "@/components/ui/typography/Heading";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import { discussionsList } from "@/utils/data";
import { ButtonWithArrow } from "../ui/ButtonWithArrow";
import Layout from "./Layout";

const Discussions = () => {
  return (
    <Layout>
      <div
        id="discussions"
        className="flex w-full flex-col justify-between md:flex-row md:items-center"
      >
        <Heading as="h2" className="font-semibold md:w-[622px]">
          Mulai skill kamu dengan bergabung disini
        </Heading>
        <ButtonWithArrow
          className="my-4 flex w-fit items-center justify-center space-x-4 rounded-full bg-gradient-to-br from-violets via-verylightblue to-cadet py-3 pl-7 pr-3 md:my-0"
          desc="Join Group"
          isDarkArrowRight
        />
      </div>
      <Paragraph className="mt-2 text-lg font-medium text-brown">
        Kami belajar dan membahas banyak materi serta projek
      </Paragraph>
      <div className="mt-14 grid grid-cols-1 grid-rows-3 gap-8 md:grid-cols-2 md:gap-10">
        {discussionsList.map((discus) => (
          <CardDiscussion
            id={discus.id}
            title={discus.title}
            description={discus.description}
            key={discus.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Discussions;