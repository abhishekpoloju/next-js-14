"use client"
import DropDown from '@/common/DropDown'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen group flex flex-col items-center justify-center p-5">
      <DropDown
        button={"button"}
        content={<div className={`w-20 opacity-0 group-hover:opacity-100 bg-pink-300 border border-red-500 h-24 before:content-[''] before:w-[20%] before:h-[20%] before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-yellow-400 before:rotate-45 before:-z-10`}></div>}
        defaultPlcmt='bottom'
        buttonClass=''
        backupPlcmts={["bottom"]}
      >
      </DropDown>
    </div>
  )
}

export default page
