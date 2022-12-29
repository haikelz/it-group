import { ChildrenProps } from "@/types";
import clsx from "clsx";

type ParagraphProps = ChildrenProps & {
  className?: string;
};

export const Paragraph = ({ className, children }: ParagraphProps) => {
  return <p className={clsx("leading-normal tracking-normal", className)}>{children}</p>;
};
