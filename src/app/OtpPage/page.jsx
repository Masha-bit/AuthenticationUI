'use client';
import React, { useState } from 'react';
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineCheckCircle,
} from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';
import Input from '../Home/component/Input';
import Link from 'next/link';
import Button from '../Home/component/Button';
import Popup from '../Home/component/Popup';
import { useRouter, useParams } from 'next/navigation';
import ErrorPopup from '../Home/component/ErrorPopup';

function OtpPage() {
  const text_color = '[#4b4b4bb6]';
  const ph_color = '[#afa9a9b6]';
  const light_blue = '[#5137ff]';
  const dark_blue = '[#1c1360]';

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const emailHandler = (text) => {
    setText(text);
    setError('');
  };

  const submit = () => {
    if (text.trim() === '') {
      setError('  Please enter an email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setError('Please enter a valid email address');
      return;
    }

    setEmail(text);
    console.log(router);

    function generateRandomNumbers() {
      const numbers = [];

      for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
        numbers.push(randomNumber);
      }

      return numbers;
    }
    const number = generateRandomNumbers();
    setOtp(number.join(''));

    if (window !== 'undefined') {
      localStorage.setItem('OTP', JSON.stringify(number)), [number];
    }

    setIsSubmitting(true); // Set isSubmitting to true before the delay

    setTimeout(() => {
      setIsSubmitting(false); // Set isSubmitting back to false after the delay
      router.push('/OtpValidation'); // Redirect to '/NewPassword' after the delay
    }, 4000); // 10 seconds delay
  };

  return (
    <div className="h-[100vh] w-[100vw] relative">
      {/* popup div  */}
      <div>
        <Popup
          icon={<AiOutlineCheckCircle style={{ color: 'white' }} />}
          text={`Your OTP is ${otp}`}
          state={isSubmitting}
        />
      </div>
      <main
        className={`font-nunito h-[100vh] w-[42%] sm:w-[100vw] flex flex-col justify-center items-center text-${text_color} relative`}
      >
        <h1 className={`text-[23px] font-semibold text-${dark_blue} w-[60%]`}>
          Forgot Password?
        </h1>
        <p className={`text-${text_color} w-[60%] text-[12.5px]`}>
          We will confirm whether your email is registered and send your system
          your OTP
        </p>

        <form className="mt-[2rem] flex flex-col items-center justify-around h-[auto] w-[60%] ">
          <Input
            label={'Email Address'}
            icon={'@'}
            placeholder={''}
            type={'email'}
            onChange={(e) => emailHandler(e.target.value)}
            error={error == '' ? false : error}
          />

          {/* {error && <p className='text-red-500 text-xs mt-2'>{error}</p>} */}
        </form>

        <div className="h-[60px] w-[60%] flex flex-row items-center justify-between text-[13px]">
          {/* <label>
            <input type='checkbox' id='' name='' className='h-[10px] w-[auto]'/>
            Keep me signed in
          </label> */}
        </div>

        <Button
          link={''}
          icon={<BsSend style={{ color: 'white', outline: 'white' }} />}
          text={isSubmitting ? 'Submitting...' : 'SUBMIT'}
          onClick={submit}
        />

        <p
          className={`text-${ph_color} text-[11px] absolute bottom-0 w-[60%] mb-[2rem] text-center`}
        >
          Don't have an account yet?
          <Link
            href={'./'}
            className={`text-${light_blue} underline decoration-${light_blue}`}
          >
            Try for free!
          </Link>
        </p>
      </main>
    </div>
  );
}

export default function page() {
  return (
    <html lang="en">
    <body className="h-[100vh] w-[100vw] bg-[#b6b3a3] m-0 p-0 flex flex-row font-nunito">
      <div className="h-[100%] w-[42%] sm:w-[100vw] bg-white"><OtpPage/></div>

      <div
        className="h-[100%] w-[58%]  flex flex-col items-center bg-right text-white relative p-[1rem] sm:hidden"
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
