import React from 'react'
import { BiEdit, BiEditAlt } from 'react-icons/bi'
import EditButton from './EditButton'

export default function Profiler(props) {
  return (
    <div className='h-[auto] w-[100%] flex flex-row justify-between items-center  text-[#2b2b2bdb] my-5 pb-3'>
        <div className='flex items-center'>
          <div className='h-[80px] w-[80px] rounded-full bg-[#1c1360] mr-2'></div>
          <div className='ml-3'>
            <h1 className='font-bold text-[#000] text-[18px]'>{props.name}</h1>
            <p className='text-[12px]'>{props.role}</p>
            <p className='text-[11px]'>{props.address}</p>
          </div>
          </div>

          <EditButton/>
    </div>
  )
}
