import { IModalProps } from '@/utils/interfaces'
import React from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'

const Modal = ({ open, rootClass, children, showOverlay, overLayClass, customOverLay, childrenClass, closeOnOverlay, handleModal }: IModalProps) => {
  if (open) {
    return (
      <>
        {
          createPortal(
            <div className={twMerge(`fixed inset-0  overflow-y-auto`, rootClass)}>
              {showOverlay && (
                <>
                  {
                    customOverLay ?
                      (
                        <div onClick={() => {
                          if (closeOnOverlay && handleModal) {
                            handleModal(!open)
                          }
                        }} className={twMerge(`fixed inset-0`, overLayClass)}>
                          {
                            customOverLay
                          }
                        </div>) :
                      (
                        <div className={twMerge(`fixed inset-0 bg-slate-500 bg-opacity-50`, overLayClass)}>
                        </div>
                      )
                  }
                </>
              )
              }
              <div className={twMerge(`fixed inset-0 overflow-y-auto py-10 flex justify-center items-center`, childrenClass)}>
                {
                  children
                }
              </div>
            </div>,
            document.body,
            "react-portal-model"
          )
        }
      </>
    )
  } else {
    return null
  }
}
export default Modal
