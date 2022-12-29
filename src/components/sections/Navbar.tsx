import { Bar } from "@/components/ui/svg/Bar";
import { X } from "@/components/ui/svg/X";
import { Heading } from "@/components/ui/typography/Heading";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-10 flex w-full max-w-full items-center justify-center bg-cadet/80 p-4 backdrop-blur-md md:fixed">
        <div className="max-w-8xl flex w-full items-center justify-between">
          <Heading as="h2" className="font-bold text-white">
            ITGroup
          </Heading>
          <ul className="hidden items-center justify-center text-[20px] font-medium text-white md:flex md:space-x-6 lg:space-x-10">
            <li>
              <Paragraph className="">Layanan</Paragraph>
            </li>
            <li>
              <Paragraph className="">Blog</Paragraph>
            </li>
            <li>
              <Paragraph className="">Tentang</Paragraph>
            </li>
            <li>
              <Paragraph className="">Kontak</Paragraph>
            </li>
            <li>
              <button
                type="submit"
                className="rounded-full bg-fulvous px-10 py-3.5 font-medium text-white"
                aria-label="submit button"
              >
                Join Now
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsActive(!isActive)}
            aria-label="open close navbar"
          >
            {isActive ? <X /> : <Bar />}
          </button>
        </div>
      </nav>
      {isActive ? (
        <nav className="fixed z-10 flex w-full max-w-full items-center justify-center bg-cadet/80 p-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center justify-center space-y-4">
            <li>
              <Paragraph className="text-lg font-semibold text-white">Layanan</Paragraph>
            </li>
            <li>
              <Paragraph className="text-lg font-semibold text-white">Blog</Paragraph>
            </li>
            <li>
              <Paragraph className="text-lg font-semibold text-white">Tentang</Paragraph>
            </li>
            <li>
              <Paragraph className="text-lg font-semibold text-white">Kontak</Paragraph>
            </li>
            <li>
              <button
                type="submit"
                className="rounded-full bg-fulvous px-10 py-3.5 font-semibold text-white"
                aria-label="join button"
              >
                Join Now
              </button>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
