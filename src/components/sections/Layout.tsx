import { ChildrenProps } from "@/types";
import clsx from "clsx";

type LayoutProps = ChildrenProps & {
  bgColor?: string;
  isMinHScreen?: boolean;
  className?: string;
};

const Layout = ({ children, bgColor, isMinHScreen, className }: LayoutProps) => {
  return (
    <section
      className={clsx(
        "flex w-full max-w-full items-center justify-center",
        `bg-${bgColor}`,
        isMinHScreen ? "min-h-screen" : "",
        className
      )}
    >
      <div className="md:max-w-8xl flex w-full max-w-full flex-col px-4 py-10 md:py-20 xl:px-0">
        {children}
      </div>
    </section>
  );
};

export default Layout;
