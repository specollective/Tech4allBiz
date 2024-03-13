import React from "react";

import Link from "next/link";
import { cn } from "@/app/utils/mergeClasses";

export type ButtonVariant =
  | "lessons"
  | "primary"
  | "secondary"
  | "text"
  | undefined;

export interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

export const styles = {
  buttonAlignment: "px-2 md:px-4 py-3 justify-center items-center inline-flex",
  lessons:
    "px-6 py-2 text-black bg-[#F0C808] rounded hover:bg-[#C9A900] transition-colors",
  primary:
    "w-fit mt-auto inline-block bg-[#1282A2] text-white py-2 px-4 rounded hover:bg-[#0E6881] transition-colors text-center",
  secondary:
    "px-6 py-2 text-black border border-[#0E4873] rounded hover:bg-[#0E4873] hover:text-white transition-colors",
  text: "hover:underline hover:underline-offset-4 decoration-2 hover:decoration-[#F0C808]",
};

const Button = ({
  href,
  variant = "text",
  className,
  text,
  children,
}: ButtonProps) => {
  const classes = cn(
    styles.buttonAlignment,
    styles[variant] || "",
    className,
  );

  return (
    <Link href={href} className={classes}>
      {children || text}
    </Link>
  );
};

export default Button;
