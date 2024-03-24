//file to write all interfaces and related to all functions and componets

import { HTMLProps, ReactNode } from "react";

export type IPlacementTypes =
  | "top"
  | "top-start"
  | "top-end"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export interface IDropDownProps {
  content?: ReactNode;
  button?: ReactNode;
  buttonClass?: HTMLProps<HTMLElement>["className"];
  contentClass?: HTMLProps<HTMLElement>["className"];
  openClass?: HTMLProps<HTMLElement>["className"];
  containerClass?: HTMLProps<HTMLElement>["className"];
  defaultPlcmt?: IPlacementTypes;
  backupPlcmts?: Array<IPlacementTypes>|"auto";
  contentViewLimit?: "viewport" | "root";
  onCloseActions?: () => void;
  onOpenActions?: () => void;
  customOpen?:boolean
}
