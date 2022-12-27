import { Github } from "@/components/ui/svg/Github";
import { Instagram } from "@/components/ui/svg/Instagram";
import { Telegram } from "@/components/ui/svg/Telegram";
import { Whatsapp } from "@/components/ui/svg/Whatsapp";
import { Heading } from "@/components/ui/typography/Heading";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import Layout from "./Layout";

const Footer = () => {
  return (
    <Layout bgColor="cadet" className="text-white">
      <div className="mb-6 flex flex-col justify-between md:flex-row">
        <div className="">
          <div>
            <Heading as="h2" className="font-bold">
              ITGroup
            </Heading>
            <Paragraph className="mt-5 text-[18px] font-medium md:w-[400px]">
              ItGroup merupakan komunitas anak muda it yang bertujuan untuk meningkatkan dan
              merekrut talent yang berbakat bergabung bersama kami untuk menjadi pribadi yang
              berkembang dan bermanfaat
            </Paragraph>
          </div>
          <div className="my-10">
            <Heading as="h5" className="mb-2 text-[20px] font-semibold">
              Our Social Media
            </Heading>
            <ul className="flex space-x-6">
              <li>
                <Instagram />
              </li>
              <li>
                <Telegram />
              </li>
              <li>
                <Whatsapp />
              </li>
              <li>
                <Github />
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <Heading as="h5" className="text-[22px] font-semibold">
            Explore
          </Heading>
          <ul className="mt-2 space-y-3 text-[18px] font-medium">
            <li>
              <Paragraph className="">Layanan</Paragraph>
            </li>
            <li>
              <Paragraph className="">Blog</Paragraph>
            </li>
            <li>
              <Paragraph className="">Portfolio</Paragraph>
            </li>
            <li>
              <Paragraph className="">Contact</Paragraph>
            </li>
          </ul>
        </div>
        <div className="my-10 md:mt-0">
          <Heading as="h5" className="text-[22px] font-semibold">
            Contact Us
          </Heading>
          <Paragraph className="mt-2 text-[18px] font-medium">0823-3162-3374</Paragraph>
        </div>
      </div>
      <div>
        <Paragraph className="text-center text-[18px] font-medium">
          Copyright © 2020 • All rights reserved ITGroup
        </Paragraph>
      </div>
    </Layout>
  );
};

export default Footer;
