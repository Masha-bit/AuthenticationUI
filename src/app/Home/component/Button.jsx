import Link from 'next/link'
import React from 'react'

export default function Button(props) {
    return (        
        <button className='h-[50px] w-[60%] bg-[#1c1360] rounded-md shadow-2xl'>
            <Link href={props.link} className='h-[100%] w-[100%] flex items-center justify-center font-bold text-[13px] text-white' onClick={props.onClick? props.onClick: null}>
                <button di></button>
                    
                        <span className='mx-2 text-white'>{props.icon}</span>
                        {props.text}
                
            </Link>
        </button>
    )
}
