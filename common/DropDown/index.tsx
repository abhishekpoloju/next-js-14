"use client"
import clsx from 'clsx'
import React, { HTMLProps, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { getDropDownPlacementCss, isInViewPort } from '../../utils/helpers'
import { IDropDownProps } from '../../utils/interfaces'
import { useClickAway } from '../../utils/custom-hooks'
import { autoBackupPlcmts } from '@/utils/constants'

const DropDown = (
  { content, button, buttonClass, openClass, backupPlcmts, contentClass, containerClass, defaultPlcmt, contentViewLimit, onCloseActions, onOpenActions, customOpen }: IDropDownProps
) => {
  const [currPlcmt, setCurrPlcmt] = useState<HTMLProps<HTMLElement>["className"]>(getDropDownPlacementCss(defaultPlcmt))
  const [open, setOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const togglePopOver = useCallback((dropDownOpen: boolean) => {
    open !== dropDownOpen && setOpen(dropDownOpen);
    !dropDownOpen && onCloseActions && onCloseActions();
    dropDownOpen && onOpenActions && onOpenActions();
  }, [onCloseActions, onOpenActions, open])

  useClickAway(containerRef, () => {
    togglePopOver(false)
  })

  useLayoutEffect(() => {
    if (open && contentRef && contentRef.current && buttonRef && buttonRef.current) {
      const { left: buttonLeft, bottom: buttonBottom, right: buttonRight, top: buttonTop, width: buttonWidth, height: buttonHeight } = buttonRef.current.getBoundingClientRect();
      const { left: contentLeft, bottom: contentBottom, right: contentRight, top: contentTop, width: contentWidth, height: contentHeight } = contentRef.current.getBoundingClientRect();

      if ((contentLeft < 0 || contentTop < 0 || contentRight > window.innerWidth || contentBottom > window.innerHeight) && backupPlcmts && backupPlcmts.length > 0) {
        const tempPlcmts = Array.isArray(backupPlcmts) ? backupPlcmts : autoBackupPlcmts
        for (const plcmt of tempPlcmts) {
          isInViewPort(plcmt, containerRef, buttonRef);
        }
      }
    }
  }, [backupPlcmts, open])

  useEffect(() => {
    if (typeof customOpen !== "undefined" && typeof customOpen === "boolean") {
      togglePopOver(customOpen)
    }
  }, [customOpen, togglePopOver])

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
          <div ref={buttonRef}
            className={
              clsx(
                twMerge("cursor-pointer backdrop-contrast-100", buttonClass),
                open && openClass)
            }
            onClick={() => {
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
