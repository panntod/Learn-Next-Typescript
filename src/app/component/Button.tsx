"use client"

import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isDisabled?: boolean;
}

export function PrimaryButton({
  children,
  type,
  onClick,
  className
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
    >
      <span
        className={"text-base text-white"}
      >
        {children}
      </span>
    </button>
  );
}

export function CloseButton({
  children,
  type,
  onClick,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    >
      <span
        className={"text-base text-white"}
      >
        {children}
      </span>
    </button>
  );
}