import React from 'react'
import Home from './Home/page'
import Link from 'next/link';


export default function page() {
  return (
    <html lang="en">
    <body className="h-[100vh] w-[100vw] bg-[#b6b3a3] m-0 p-0 flex flex-row font-nunito">
      <div className="h-[100%] w-[42%] sm:w-[100%] bg-white"><Home/></div>

      <div
        className="h-[100%] w-[58%] flex flex-col items-center bg-right text-white relative p-[1rem] sm:hidden"
        style={{ backgroundImage: 'url(/bg.png)' }}
      >
        {/* <div className='h-[100%] w-[100%] absolute top-0 left-0 z-[1]'>
        <FloatingShapes/>
        </div> */}

        <h1 className="w-[auto] h-[40px] text-[24px] my-[.35rem] text-center font-semibold mt-[2rem]">
          Welcome To Your System.
        </h1>

        <h3 className="h-[auto] w-[70%] text-center text-[14px]">
          There's a new bar HR. Now, you can empower your team and drive 
          your business with one modern, easy-to-use platform.
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '} */}
        </h3>

        <div className="flex items-center justify-center mt-[2rem]">
          <img src="/login.svg" />
        </div>

        <div className="flex justify-between items-center h-[60px] w-[84%]  absolute bottom-0 mb-[1rem] text-[#fafafa9a] text-[11px] ">
          <p>2022 All Rights Reserved</p>
          <p className="">
            Developed and Maintained by{' '}
            <Link
              href={`./`}
              className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all"
            >
              Masha.
            </Link>
          </p>
        </div>
      </div>
    </body>
  </html>
  )
}
