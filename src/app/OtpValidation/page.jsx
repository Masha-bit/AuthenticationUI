'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../Home/component/Button';
import { BsSend } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Popup from '../Home/component/Popup';

export default function OtpPage() {
  const text_color = '[#4b4b4bb6]';
  const ph_color = '[#afa9a9b6]';
  const light_blue = '[#5137ff]';
  const dark_blue = '[#1c1360]';

  const otp =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('OTP') || `[]`)
      : [];

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
        className={`font-nunito h-[100%] w-[42%] flex flex-col justify-center items-center text-${text_color} relative`}
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
          text={'CONTINU'}
          onClick={handleSubmit}
        />

        <p
          className={`text-${ph_color} text-[11px] absolute bottom-0 w-[60%] mb-[2rem] text-center`}
        ></p>
      </main>
    </div>
  );
}
