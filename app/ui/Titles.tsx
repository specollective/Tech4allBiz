import { cn } from "@/app/utils/mergeClasses";
import React from "react";

type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const Title1 = ({ id, children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-[64px] leading-[1.25] py-2 font-monts font-semibold",
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
    "text-xl md:text-2xl font-arial leading-[36px] py-2",
    className,
  );
  return <h1 className={classes}>{children}</h1>;
};

export const Title3 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-xl font-arial leading-[40px] md:leading-[60px] py-2",
    className,
  );
  return <h1 className={classes}>{children}</h1>;
};
