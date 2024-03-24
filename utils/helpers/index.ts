import { HTMLProps } from "react";
import { IPlacementTypes } from "../interfaces";

export function getDropDownPlacementCss(
  placement: IPlacementTypes | undefined
): HTMLProps<HTMLElement>["className"] {
  switch (placement) {
    case "bottom":
      return "absolute bottom-[0%] left-[50%] translate-x-[-50%] translate-y-[100%]";
    // return {
    //   position: "absolute",
    //   bottom: "0%",
    //   translate: "-50% 100%",
    //   left: "50%",
    // };
    case "bottom-start":
      return "absolute bottom-[0%] left-[0%] translate-y-[100%]";
    // return {
    //   position: "absolute",
    //   bottom: "0%",
    //   translate: "0% 100%",
    //   left: "0%",
    // };
    case "bottom-end":
      return "absolute bottom-[0%] right-[0%] translate-y-[100%]";
    // return {
    //   position: "absolute",
    //   bottom: "0%",
    //   translate: "0% 100%",
    //   left: "100%",
    // };
    case "bottom-left":
      return "absolute bottom-[0%] left-[0%] translate-x-[-100%] translate-y-[100%]";
    // return {
    //   position: "absolute",
    //   bottom: "0%",
    //   translate: "-100% 100%",
    //   left: "0%",
    // };
    case "bottom-right":
      return "absolute bottom-[0%] left-[100%] translate-x-[100%] translate-y-[100%]";
    // return {
    //   position: "absolute",
    //   bottom: "0%",
    //   translate: "100% 100%",
    //   left: "100%",
    // };
    case "top":
      return "absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-100%]";
    // return {
    //   position: "absolute",
    //   top: "0%",
    //   translate: "-50% -100%",
    //   left: "50%",
    // };
    case "top-start":
      return "absolute top-[0%] left-[0%] translate-y-[-100%]";
    // return {
    //   position: "absolute",
    //   top: "0%",
    //   translate: "0% -100%",
    //   left: "0%",
    // };
    case "top-end":
      return "absolute top-[0%] right-[0%] translate-y-[-100%]";
    // return {
    //   position: "absolute",
    //   top: "0%",
    //   translate: "0% -100%",
    //   left: "100%",
    // };
    case "top-left":
      return "absolute top-[0%] left-[0%] translate-x-[-100%] translate-y-[-100%]";
    // return {
    //   position: "absolute",
    //   top: "0%",
    //   translate: "-100% -100%",
    //   left: "0%",
    // };
    case "top-right":
      return "absolute top-[0%] right-[0%] translate-x-[100%] translate-y-[-100%]";
    // return {
    //   position: "absolute",
    //   top: "0%",
    //   translate: "100% -100%",
    //   left: "100%",
    // };
    case "left":
      return "absolute top-[50%] left-[0%] translate-x-[-100%] translate-y-[-50%]";
    // return {
    //   position: "absolute",
    //   top: "50%",
    //   translate: "-100% -50%",
    //   left: "0%",
    // };
    case "left-end":
      return "absolute bottom-[0%] left-[0%] translate-x-[-100%]";
    // return {
    //   position: "absolute",
    //   top: "100%",
    //   translate: "-100% 0%",
    //   left: "0%",
    // };
    case "left-start":
      return "absolute top-[0%] left-[0%] translate-x-[-100%]";
    // return {
    //   position: "absolute",
    //   top: "0%",
    //   translate: "-100% 0%",
    //   left: "0%",
    // };
    case "right":
      return "absolute top-[50%] translate-y-[-50%] right-[0%] translate-x-[100%]";
    // return {
    //   position: "absolute",
    //   top: "0%",
    //   translate: "100% 0%",
    //   right: "0%",
    // };
    case "right-start":
      return "absolute right-[0%] translate-x-[100%] top-[0%]";
    case "right-end":
      return "absolute bottom-[0%] right-[0%] translate-x-[100%]";
    // return {
    //   position: "absolute",
    //   top: "100%",
    //   translate: "100% 0%",
    //   right: "0%",
    // };
    default:
      return "";
    // return {};
  }
}

export function isInViewPort(
  plcmtType: IPlacementTypes,
  targetElementRef: React.MutableRefObject<HTMLElement | null>,
  popperElementRef: React.MutableRefObject<HTMLElement | null>
) {
  if (targetElementRef.current && popperElementRef.current) {
    console.log(plcmtType)
  }
}