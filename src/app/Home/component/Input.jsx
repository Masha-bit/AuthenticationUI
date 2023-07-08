"use client"
import React, { useEffect, useState } from 'react'
import {CgPassword} from 'react-icons'
import ErrorPopup from './ErrorPopup'

export default function Input(props) {

    const text_color = '[#4b4b4bb6]'
    const ph_color = '[#afa9a9b6]'
    const errorColor = '[#ff3d3d]'

    const [clicked, setClick] = useState(false)
    const [type, setType] = useState(props.type)
    
    const handle_view = () => {
        setClick(!clicked)
      }
      
    useEffect(()=> {        
      clicked?setType('text'):setType(props.type)
  }, [clicked])

  return (

    <label className='mt-[.5rem] w-[100%] text-left my-3 relative'>
    {props.label}
    <div className={`${!props.error? `text-${ph_color} border-${text_color}`: `text-${errorColor} border-[#ff3d3d]`} w-[100%] h-[45px] border-2 rounded-md p-2 flex items-center relative`}>

      <span className={`text-[13px] mx-2 h-[100%] flex items-center`} style={ props.error?{color: errorColor}:{color: ph_color}}>{props.icon[0]}</span>
      <input required onChange={props.onChange? props.onChange : null} type={type} name="" id="" placeholder={props.placeholder} className={`placeholder:text-${ph_color} placeholder:text-[11px] w-[90%] outline-none border-none`} />

    {props.icon[1]?

            (
                <span className={`text-${ph_color} text-[15px] h-[100%] flex items-center absolute top-0 right-0 mr-4`} style={{color: ph_color}} onClick={handle_view}>{ clicked?props.icon[2]: props.icon[1] }</span>
            ): null}

    

    </div>
    <ErrorPopup error={props.error}/>
    <style jsx>
      {`
      input[type="password"]::-ms-reveal,
      input[type="password"]::-ms-clear {
        display: none;
      }
      `}
    </style>
  </label>
  )
}
