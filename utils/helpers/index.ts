import { IPlacementTypes } from "../interfaces"

export function getDefaultPlacementCss(placement: IPlacementTypes | undefined) {
  switch (placement) {
    case "bottom":
      return "absolute bottom-0 translate-x-[100%] left-[50%] translate-x-[-50%] "
    case "left":
      return "absolute left-0 translate-x-[-100%] top-[50%] translate-y-[-50%]"
    case "right":
      return "absolute right-0 translate-y-[-100%] top-[50%] translate-y-[-50%]"
    case "top":
      return "absolute top-0 translate-x-[-100%] left-[50%] translate-x-[-50%]"
    default:
      return ""
  }
}