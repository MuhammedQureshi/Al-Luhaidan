import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='customBg h-screen w-screen flex-col flex items-center justify-center'>
      <section className='lg:flex w-full flex-1 gap-20'>
        <div className=' flex items-center justify-center p-[3rem] lg:ml-[10rem] '>
          <Image className='w-auto' src={'https://i.pinimg.com/736x/17/06/06/170606b199c1abad48249ca178739167.jpg'} width={650} height={250} alt={''} />
        </div>
        <div className='flex items-center justify-center'>
          <h1 className='xl:text-6xl text-2xl'>Surah Yaseen</h1>
          <button></button>
        </div>
      </section>
    </div>
  )
}

export default Hero