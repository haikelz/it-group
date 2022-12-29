import { DarkArrowRight } from "./svg/DarkArrowRight";
import { FulvousArrowRight } from "./svg/FulvousArrowRight";
import { WhiteArrowRight } from "./svg/WhiteArrowRight";
import { Paragraph } from "./typography/Paragraph";

type ButtonProps = {
  className?: string;
  desc: string;
  isWhiteArrowRight?: boolean;
  isDarkArrowRight?: boolean;
};

export const ButtonWithArrow = ({
  className,
  desc,
  isWhiteArrowRight,
  isDarkArrowRight,
}: ButtonProps) => {
  return (
    <button type="button" className={className} aria-label="button with arrow">
      <Paragraph className="text-lg font-semibold text-white">{desc}</Paragraph>
      {isWhiteArrowRight ? (
        <WhiteArrowRight />
      ) : isDarkArrowRight ? (
        <DarkArrowRight />
      ) : (
        <FulvousArrowRight />
      )}
    </button>
  );
};
