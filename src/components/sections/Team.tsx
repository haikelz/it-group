import CardPersonInTeam from "@/components/ui/cards/CardPersonInTeam";
import { Heading } from "@/components/ui/typography/Heading";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import { personsInTeamList } from "@/utils/data";
import clsx from "clsx";
import Layout from "./Layout";

const Team = () => {
  return (
    <Layout className="bg-lavender">
      <div id="team" className="mb-10">
        <div className="text-center">
          <Paragraph className="text-lg font-medium text-brown">BERGABUNG DENGAN KAMI</Paragraph>
          <Heading as="h2" className="font-semibold">
            Semua Team IT Group
          </Heading>
        </div>
        <div
          className={clsx(
            "relative mt-10 grid grid-cols-1 grid-rows-1 gap-16",
            "md:grid-cols-2 md:gap-10 lg:mt-20 lg:grid-cols-3"
          )}
        >
          {personsInTeamList.map((person) => (
            <CardPersonInTeam
              key={person.id}
              image={person.image}
              job={person.job}
              name={person.name}
              desc={person.desc}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Team;
