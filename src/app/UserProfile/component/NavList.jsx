import React from 'react'

export default function NavList(props) {
  return (
    <div className='w-[100%] h-[auto] my-3'>
      {
      props.title? (
        <h1 className='text-[12px] w-[100%] text-left text-[#7a7676b6] ml-2'>{props.title}</h1>
      ): null
      }
        
        <div className='flex flex-col justify-around items-center w-[100%]'>
        {
          props.item.map((item) => (
            <div  className={ !item.important? item.active? `bg-[#6793da89] text-[#4086ee] font-semibold h-[30px] w-[100%] flex  text-[14px] font-nunito text-left rounded-full `:`h-[30px] w-[100%] text-${item.important ? `[#ff2b2b]`:`[#5f5d5db6]` } flex items-center  text-[14px] font-nunito text-left rounded-lg hover:bg-[#a5c5f84a] hover:text-[#4086ee] font-semibold hover:transition-all transition-all mt-[1rem]`: `h-[30px] w-[100%] text-${item.important ? `[#ff2b2b]`:`[#5f5d5db6]` } flex items-center  text-[14px] font-nunito text-left mt-[1rem] hover:cursor-pointer font-semibold` }>
              <span className='mx-2 h-[100%] flex items-center'>{item.icon}</span>
              <p className='h-[100%] flex items-center'>{item.name}</p>
              {item.special? (
                <span className='h-[14px] min-w-[14px] w-[auto] rounded-full bg-orange-500 ml-5 text-[11px] flex items-center justify-center text-white p-1'>
                  {item.special}
                </span>
              ): null}
            </div>
          ))
        }
        </div>

      
    </div>
  )
}
