import { cn } from "@/app/utils/mergeClasses";
import React from "react";

type TextProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const TextHeader = ({ children, className = "" }: TextProps) => {
  const classes = cn(
    "text-[18px] font-normal leading-normal font-sans",
    className,
  );
  return <p className={classes}>{children}</p>;
};

export const TextBody = ({ children, className = "" }: TextProps) => {
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
    "text-[12px] font-semibold leading-tight font-sans",
    className,
  );
  return <span className={classes}>{children}</span>;
};
