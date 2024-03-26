import { cn } from "@/app/utils/mergeClasses";
import React from "react";

type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const Title1 = ({ id, children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-[24px] md:text-[64px] leading-[1.25] py-2 font-monts font-semibold",
    className,
  );
  return (
    <h1 id={id} className={classes}>
      {children}
    </h1>
  );
};

export const Title2 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-[24px] md:text-[36px] leading-[36px] py-2 font-monts font-semibold",
    className,
  );
  return <h2 className={classes}>{children}</h2>;
};

export const Title3 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-[24px] leading-normal py-1 font-monts font-semibold",
    className,
  );
  return <h3 className={classes}>{children}</h3>;
};

// Used for Card Header
export const Title4 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-[16px] md:text-[18px] font-semibold font-monts",
    className,
  );
  return <div className={classes}>{children}</div>;
};
