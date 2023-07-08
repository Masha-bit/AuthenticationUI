'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../Home/component/Button';
import { BsSend } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Popup from '../Home/component/Popup';
import Link from 'next/link';

function OtpVal() {
  const text_color = '[#4b4b4bb6]';
  const ph_color = '[#afa9a9b6]';
  const light_blue = '[#5137ff]';
  const dark_blue = '[#1c1360]';

  var otp = []

  typeof window !== 'undefined'?
    otp = JSON.parse(localStorage.getItem('OTP') || `[]`)
      : otp = [];

  const [otpInputs, setOtpInputs] = useState(['', '', '', '']);
  const otp_BETA_TEST = [1, 2, 3, 4]; // Replace with your actual OTP array
  const router = useRouter();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef([...Array(otp.length)].map(() => React.createRef()));

  const handleOtpInputChange = (index, value) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOtp = otpInputs.map((input) => parseInt(input, 10));

    if (enteredOtp.length !== otp.length) {
      setError('Invalid OTP');
      return;
    }

    const isOtpValid = otp.every((num, index) => num === enteredOtp[index]);

    if (isOtpValid) {
      // Redirect to another page
      setSuccess(true);
      setTimeout(() => {
        router.push('/NewPassword'); // Redirect to '/NewPassword' after the delay
      }, 4000); // 10 seconds delay
    } else {
      setError('Incorrect OTP');
      setSuccess(false);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] relative">
      <div>
        <Popup
          icon={<AiOutlineCheckCircle style={{ color: 'green' }} />}
          text={`OTP is validated`}
          state={success}
        />
      </div>
      <main
        className={`font-nunito h-[100vh] w-[42%] sm:w-[100vw] flex flex-col justify-center items-center text-${text_color} relative`}
      >
        <h1 className={`text-[23px] font-semibold text-${dark_blue} w-[60%]`}>
          ENTER OTP.
        </h1>
        <p className={`text-${text_color} w-[60%] text-[12.5px]`}>
          Enter the OTP logged on your system
        </p>

        <form
          className="my-[4rem] flex flex-row items-center justify-around h-[auto] w-[50%] relative "
          onSubmit={handleSubmit}
        >
          {otpInputs.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleOtpInputChange(index, e.target.value)}
              maxLength={1}
              ref={inputRefs.current[index]}
              placeholder={value}
              className={
                error == ''
                  ? `text-${ph_color} h-[80px] w-[55px] border-2 rounded-md border-${ph_color} text-center `
                  : !success
                  ? `border-red-500 text-red-500 h-[80px] w-[55px] border-2 rounded-md text-center`
                  : `text-green-400 h-[80px] w-[55px] border-2 rounded-md border-green-400 text-center `
              }
            />
          ))}
        </form>

        <div className="h-[60px] w-[60%] flex flex-row items-center justify-between text-[13px] text-red-500">
          {!success && <p>{error}</p>}
        </div>

        <Button
          link={''}
          icon={<BsSend style={{ color: 'white', outline: 'white' }} />}
          text={'CONTINUE'}
          onClick={handleSubmit}
        />

        <p
          className={`text-${ph_color} text-[11px] absolute bottom-0 w-[60%] mb-[2rem] text-center`}
        ></p>
      </main>
    </div>
  );
}

export default function page() {
  return (
    <html lang="en">
    <body className="h-[100vh] w-[100vw] bg-[#b6b3a3] m-0 p-0 flex flex-row font-nunito">
      <div className="h-[100%] w-[42%] sm:w-[100%] bg-white"><OtpVal/></div>

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
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

