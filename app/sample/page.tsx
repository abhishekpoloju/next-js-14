import Link from 'next/link'
import React from 'react'

const page = async () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <p>Abhishek</p>
      <Link href={`/sample/inside`} className='text-black'>to my heart</Link>
    </div>
  )
}

export default page
