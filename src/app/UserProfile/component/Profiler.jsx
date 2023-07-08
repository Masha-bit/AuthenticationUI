'use client'
import React, { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import EditButton from './EditButton'
import Popup from '@/app/Home/component/Popup'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function Profiler(props) {

    const [isEdit, setEdit ] = useState(false)

    const handleEdit =() => {
        setEdit(!isEdit)
    }

  return (
    <div className='h-[auto] w-[100%] flex flex-col my-1 '>
              {/* popus  */}
        {/* <div>
        <Popup
          icon={<AiOutlineCheckCircle style={{ color: 'green' }} />}
          text={`Changes saved`}
          state={handleEdit}
        />
      </div> */}
      
        <div className='h-[auto] w-[100%] flex justify-between items-center'>
            <p className='text-[14px] text-black font-semibold'>{props.title}</p>
            <EditButton onClick={handleEdit} isEdit={isEdit}/>
        </div>

        <div className='h-[auto] w-[80%]  flex-wrap flex justify-between'>
            {
                isEdit?
                props.detail.map((item)=>(
                    <label className='w-[50%] my-3'>
                        <p className='text-[12px] text-[#2b2b2bdb]'>{item.name}</p>
                        <input className='text-[14px] border-[1px] rounded-md outline-none h-[auto] w-[auto]' placeholder={`${item.value.length > 25 ? item. value.slice(0,25) + `...`: item.value}`} onChange={item.onChange} ref={item.ref}/>
                    </label>
                )):
                props.detail.map((item)=>(
                    <div className='w-[50%] my-3'>
                        <p className='text-[12px] text-[#2b2b2bdb]'>{item.name}</p>
                        <p className='text-[14px]  text-black'>{item.value.length > 25 ? item.value.slice(0,25) + `...`: item.value}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}
