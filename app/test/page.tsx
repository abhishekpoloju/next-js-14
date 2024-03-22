"use client"
import DropDown from '@/common/DropDown'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <DropDown
        button={<>button</>}
        content={<div className='w-10 h-10 bg-pink-300'>
        </div>}
        defaultPlcmt='bottom-start'
        openClass='bg-yellow-300'
        buttonClass=''
        backupPlcmts={["left", "bottom", "right", "top"]}
      >
      </DropDown>
    </div>
  )
}

export default page
