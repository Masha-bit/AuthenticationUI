'use client';
import Image from 'next/image';
import { CgPassword } from 'react-icons/cg';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { BiSolidLockOpenAlt } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import Input from './component/Input';
import Link from 'next/link';
import Button from './component/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const text_color = '[#4b4b4bb6]';
  const ph_color = '[#afa9a9b6]';
  const light_blue = '[#5137ff]';
  const dark_blue = '[#1c1360]';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleActive, setGoogleActive] = useState(false);
  const router = useRouter();

  const emailHandler = (text) => {
    setEmail(text);
    setEmailError('');
  };
  const passwordHandler = (text) => {
    setPassword(text);
    setPasswordError('');
  };

  const validateForm = () => {
    let isValid = true;

    if (email.trim() === '') {
      setEmailError('Please enter an email address');
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
        isValid = false;
      }
    }

    if (password.trim() === '') {
      setPasswordError('Please enter a password');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    }

    return isValid;
  };

  const submit = () => {
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true); // Set isSubmitting to true before the delay

    setTimeout(() => {
      setIsSubmitting(false); // Set isSubmitting back to false after the delay
      router.push('./UserProfile'); // Redirect to '/OtpPage' after the delay
    }, 3000); // 10 seconds delay
  };

  const google_handler = () => {
    setGoogleActive(!isGoogleActive);
  };

  return (
    <main
      className={`font-nunito h-[100%] w-[100%] flex flex-col justify-center items-center text-${text_color} relative`}
    >
      {/* <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta name="google-signin-client_id" content="754338394520-dmirr1s2l0mmjs2046j9bitrhip7tmei.apps.googleusercontent.com "></meta> */}
      {/* 
      754338394520-dmirr1s2l0mmjs2046j9bitrhip7tmei.apps.googleusercontent.com */}
      {/* google popup div  */}
      <div
        className={
          isGoogleActive
            ? `absolute top-0 left-0 h-[100%] w-[100vw] bg-[#2d2d2d7f] z-10 flex items-center justify-center opacity-[1] transition-all`
            : `opacity-0 transition-all`
        }
      >
        <div className="h-[60%] w-[27%] bg-[#2d2d2ddc] flex flex-col items-center justify-center transition-all">
          <button
            className="h-[50px] w-[60%] bg-[#2a273e] rounded-md shadow-2xl"
            onClick={google_handler}
          >
            <div className="h-[100%] w-[100%] flex items-center justify-center font-bold text-[13px] text-white">
              <p>
                <FcGoogle size={30} />
              </p>
            </div>
          </button>
        </div>
      </div>

      <h1 className={`text-[23px] font-semibold text-${dark_blue} w-[60%]`}>
        Hi, Welcome!
      </h1>
      <p className={`text-${text_color} w-[60%] text-[12.5px]`}>
        Start 14 day full-featured trial. No credit card required
      </p>

      <form className="mt-[2rem] flex flex-col items-center justify-around h-[auto] w-[60%] ">
        <Input
          label={'Email Address'}
          icon={['@']}
          placeholder={'john@gmail.com'}
          type={'email'}
          onChange={(e) => {
            emailHandler(e.target.value);
          }}
          error={emailError}
        />
        <Input
          label={'Password'}
          icon={[<CgPassword />, <AiOutlineEye />, <AiOutlineEyeInvisible />]}
          placeholder={'8+ characters required'}
          type={'password'}
          onChange={(e) => {
            passwordHandler(e.target.value);
          }}
          error={passwordError}
        />
      </form>

      <div className="h-[60px] w-[60%] flex flex-row items-center justify-between text-[13px]">
        <label>
          <input type="checkbox" id="" name="" className="h-[10px] w-[auto]" />
          Keep me signed in
        </label>

        <Link
          href={'./OtpPage'}
          className={`text-[#5137ff] underline decoration-${light_blue}`}
        >
          <p>Forgot password</p>
        </Link>
      </div>

      <Button
        link={''}
        onClick={submit}
        icon={<BiSolidLockOpenAlt />}
        text={isSubmitting ? 'Logining in...' : 'LOGIN'}
      />

      <div></div>
      <p
        className={`text-${ph_color} text-[10px] text-center h-[auto] w-[auto] my-[2rem]`}
      >
        Or, log in with your email
      </p>

      <div
        className={`text-[10px] h-[50px] w-[60%] text-center border border-${ph_color} flex items-center justify-center rounded-md transition-all hover:bg-[#b7b7b777] hover:transition-all hover:cursor-pointer`}
        onClick={google_handler}
      >
        <span className="mr-1">
          <FcGoogle />
        </span>
        Sign in with <p className="font-bold text-[12px] ml-1">Google</p>
      </div>

      <p
        className={`text-${ph_color} text-[11px] absolute bottom-0 w-[60%] mb-[2rem] text-center`}
      >
        Don't have an account yet?
        <Link
          href={'/UserProfile'}
          className={`text-${light_blue} underline decoration-${light_blue}`}
        >
          Try for free!
        </Link>
      </p>
    </main>
  );
}
