"use client"
import clsx from 'clsx'
import React, { HTMLProps, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { getDefaultPlacementCss } from '../../utils/helpers'
import { IDropDownProps } from '../../utils/interfaces'
import { useClickAway } from '../../utils/custom-hooks'
import { autoBackupPlcmts } from '@/utils/constants'

const DropDown = (
  { content, button, buttonClass, openClass, backupPlcmts, contentClass, containerClass, defaultPlcmt, contentViewLimit, onCloseActions, onOpenActions, }: IDropDownProps
) => {
  const [currPlcmt, setCurrPlcmt] = useState<HTMLProps<HTMLElement>["className"]>(getDefaultPlacementCss(defaultPlcmt))
  const [open, setOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const togglePopOver = (open: boolean) => {
    setOpen(open);
    !open && onCloseActions && onCloseActions();
    open && onOpenActions && onOpenActions();
  }

  useClickAway(containerRef, () => {
    togglePopOver(false)
  })

  useLayoutEffect(() => {
    if (contentRef && contentRef.current) {
      const { left, bottom, right, top, width, height } = contentRef.current.getBoundingClientRect()
      if ((left < 0 || top < 0 || right > window.innerWidth || bottom > window.innerHeight) && backupPlcmts && backupPlcmts.length > 0) {
        const tempPlcmts = Array.isArray(backupPlcmts) ? backupPlcmts : autoBackupPlcmts
        for (const plcmt of tempPlcmts) {

        }
      }
    }
  }, [backupPlcmts])

  return (
    <div ref={containerRef} className={clsx(twMerge('relative border border-yellow-500', containerClass))}>
      {
        content && open && (
          <div ref={contentRef} className={clsx(twMerge(currPlcmt, contentClass))}>
            {
              content
            }
          </div>
        )
      }
      {
        button && (
          <div ref={buttonRef} className={clsx(twMerge("cursor-pointer backdrop-contrast-100", buttonClass), { openClass: open && openClass })} onClick={() => {
            togglePopOver(!open)
          }} >
            {
              button
            }
          </div>
        )
      }
    </div>
  )
}

export default DropDown
