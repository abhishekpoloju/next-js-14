"use client"
import React from 'react'


interface PopOverProps{
  children?:JSX.Element
}

const PopOver = ({children}:PopOverProps) => {

  console.log(typeof children,"type")

  return (
    <div>
      {
        children
      }
    </div>
  )
}

export default PopOver
