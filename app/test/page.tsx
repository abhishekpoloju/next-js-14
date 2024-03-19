"use client"
import PopOver from '@/common/PopOver'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen flex flex-col items-start justify-start">
      <PopOver
        button={<>button</>}
        content={<div className='w-10 h-10 bg-pink-300'>
        </div>}
        defaultPlacement='bottom'
        fallBackPlacements={["left", "bottom", "right", "top"]}
      >
      </PopOver>
    </div>
  )
}

export default page
