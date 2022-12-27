import { ChildrenProps } from "@/types";
import clsx from "clsx";
import { memo } from "react";

type ParagraphProps = ChildrenProps & {
  className: string;
};

export const Paragraph = memo(({ className, children, ...props }: ParagraphProps) => {
  return (
    <p {...props} className={clsx("leading-normal tracking-normal", className)}>
      {children}
    </p>
  );
});
