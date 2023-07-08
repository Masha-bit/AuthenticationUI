import React from 'react'

export default function Popup(props) {

    const text_color = '[#4b4b4bb6]'
    const ph_color = '[#afa9a9b6]'
    const light_blue = '[#5137ff]'
    const dark_blue = '[#1c1360]'

    const state = props.state

  return (
    <div className={ state? `open` : `close`}>
        <div className={`bg-${dark_blue} h-[100%] w-[auto] min-w-[170px] rounded-md shadow-2xl flex items-center justify-around p-3`}>
        <span className=''>
            {props.icon}
        </span>
        <div className='h-[60%] border-l-2 border-[#0a0626d6] mx-1'></div>
       {props.text}
        </div>
        <style jsx>
            {`
            .open{
                height: 44px;
                width: 100%;
                border-radius: 15px;
                background-color: ${dark_blue};
                color: white;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                position: absolute;
                bottom:0;
                left:0;
                margin-bottom:2rem;
                opacity: 1;
                z-index: 10;
                transition: all 350ms ease-in-out;
            }
            .close{
                opacity: 0;
                display: hidden;
                height: 44px;
                width: 100%;
                border-radius: 15px;
                background-color: ${dark_blue};
                color: white;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                position: absolute;
                bottom:0;
                left:0;
                z-index: 10;
                transition: all 350ms ease-in-out;               

            `}
        </style>
    </div>
  )
}
