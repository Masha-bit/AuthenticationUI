"use client"
import React, { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'

export default function EditButton(props) {
    const isEdit= props.isEdit

    // const handleEdit =() => {
    //     setEdit(props.isEdit)
    // }
  return (
    <div className={ isEdit ? `h-[30px] w-[70px] border-[1px] border-black rounded-full flex items-center justify-center text-[12px] text-[#000000db] hover:cursor-pointer`:`h-[30px] w-[70px] border-[1px] rounded-full flex items-center justify-center text-[12px] text-[#2b2b2bdb] hover:cursor-pointer`} onClick={props.onClick}>
            {isEdit? 'Save':'Edit'}
            <span><BiEditAlt/></span>
    </div>
  )
}
