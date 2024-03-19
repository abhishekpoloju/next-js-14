
//file to write all interfaces and related to all functions and componets

import { ReactNode } from "react"

export type IPlacementTypes = "top" | "bottom" | "left" | "right"

export interface IPopOverProps {
  content?: ReactNode
  button?: ReactNode,
  defaultPlacement?: IPlacementTypes
  fallBackPlacements?: Array<IPlacementTypes>
  contentViewLimit?: "viewport" | "root"
}

