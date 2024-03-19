"use client"
import { getDefaultPlacementCss } from '@/utils/helpers'
import { IPopOverProps } from '@/utils/interfaces'
import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'



const PopOver = (
  { content, button, fallBackPlacements, defaultPlacement, contentViewLimit }: IPopOverProps
) => {
  const [currPlacement, setCurrplacement] = useState(getDefaultPlacementCss(defaultPlacement))
  const contentRef = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    if (contentRef && contentRef.current) {
      const { left, bottom, right, top } = contentRef.current.getBoundingClientRect();
      if (left < 0) {
        setCurrplacement(getDefaultPlacementCss("right"))
      }
    }
  }, [])


  console.log("curr place is ",currPlacement)

  return (
    <div className='relative w-fit border border-green-300'>
      {
        content && (
          <div className={twMerge("", currPlacement)} ref={contentRef}>
            {
              content
            }
          </div>
        )
      }
      {
        button && (
          <div className=''>
            {
              button
            }
          </div>
        )
      }
    </div>
  )
}

export default PopOver
