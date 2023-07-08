import React from 'react'
import {BiError} from 'react-icons/bi'

export default function ErrorPopup(props) {
  return (
    <div className={ props.error?`h-[40px] w-[99%] text-[#ff3d3d] text-xs transition-all opacity-[1] mx-[3.5px]`: `opacity-0 transition-all relative `}>
        {props.error && <p className={ props.error?`h-[auto] w-[99%] rounded-br-2xl rounded-bl-2xl border-[1.5px] border-[#fb6060ac] border-t-0 py-[3px] px-[1rem] text-[#ff3d3d] text-xs text-left transition-all opacity-[1] bg-[#ed9999ac] flex items-center `: `opacity-0 transition-all`}>
            <span className='mr-1 inline-block'><BiError/></span>
            {props.error}
        </p>}
    </div>
  )
}
