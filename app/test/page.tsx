"use client"
import DropDown from '@/components/common/DropDown'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen group flex flex-col items-center justify-center p-5">
      <DropDown
        button={"button"}
        content={"content"}
        defaultPlcmt='bottom-end'
        buttonClass=''
        backupPlcmts={["bottom"]}
      >
      </DropDown>
    </div>
  )
}

export default page
