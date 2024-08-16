import { MouseEventHandler } from "react";

export interface IconType {
  size?: number;
  color?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
