import { cn } from "@/app/utils/mergeClasses";
import React from "react";

type TextProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const BodyBold = ({ children, className = "" }: TextProps) => {
  const classes = cn(
    "text-[18px] font-normal leading-normal font-sans font-bold",
    className,
  );
  return <p className={classes}>{children}</p>;
};

export const BodyRegular = ({ children, className = "" }: TextProps) => {
  const classes = cn(
    "text-base font-normal leading-relaxed font-sans",
    className,
  );
  return <p className={classes}>{children}</p>;
};

export const CardText = ({ children, className = "" }: TextProps) => {
  const classes = cn(
    "text-[14px] font-normal leading-normal font-sans",
    className,
  );
  return <p className={classes}>{children}</p>;
};

export const SmallText = ({ children, className = "" }: TextProps) => {
  const classes = cn(
    "text-[14px] font-semibold leading-tight font-sans",
    className,
  );
  return <span className={classes}>{children}</span>;
};
