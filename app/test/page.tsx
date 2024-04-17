"use client"
// import DropDown from '@/components/common/DropDown'
import Modal from '@/components/common/Modal'
import React, { useState } from 'react'
import Image from 'next/image'
const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = (flag: boolean) => {
    if (flag) {
      setModalOpen(true)
    } else {
      setModalOpen(false)
    }
  }

  return (
    <div className="h-screen group flex flex-col items-center justify-center p-5">
      <button onClick={() => {
        handleToggleModal(true)
      }}>nooo</button>
      <Modal open={modalOpen} showOverlay customOverLay={
        <div className='w-full h-full relative'>
          <Image src={'/background-images/model_bg.jpg'} alt={''} fill />
        </div>
      }>
        <div className='w-[50vh] h-[50vh] rounded bg-white shadow-xl'>
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log(modalOpen);
          }}>

          </form>
        </div>
      </Modal>
    </div>
  )
}

export default Page
