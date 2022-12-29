import { ChildrenProps } from "@/types";
import clsx from "clsx";

type HeadingProps = ChildrenProps & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

export const Heading = ({ children, as, className }: HeadingProps) => {
  switch (as) {
    case "h1":
      return <h1 className={clsx("text-4xl leading-snug", className)}>{children}</h1>;

    case "h2":
      return <h2 className={clsx("text-3xl leading-snug", className)}>{children}</h2>;

    case "h3":
      return <h3 className={clsx("text-2xl leading-snug", className)}>{children}</h3>;

    case "h4":
      return <h4 className={clsx("text-xl leading-snug", className)}>{children}</h4>;

    case "h5":
      return <h5 className={clsx("text-lg leading-snug", className)}>{children}</h5>;

    case "h6":
      return <h6 className={clsx("text-base leading-snug", className)}>{children}</h6>;

    default:
      return null;
  }
};
