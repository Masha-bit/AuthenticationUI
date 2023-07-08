'use client';
import Image from 'next/image';
import { CgPassword } from 'react-icons/cg';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { BiSolidLockOpenAlt } from 'react-icons/bi';
import Input from '../Home/component/Input';
import Link from 'next/link';
import Button from '../Home/component/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function page() {
  const text_color = '[#4b4b4bb6]';
  const ph_color = '[#afa9a9b6]';
  const light_blue = '[#5137ff]';
  const dark_blue = '[#1c1360]';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const router = useRouter();

  const passwordHandler = (text) => {
    setPassword(text);
    setPasswordError('');
  };

  const confirmPasswordHandler = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError('');
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters, contain numbers, and special characters.'
      );
      return false;
    }

    return true;
  };

  const submit = () => {
    const isPasswordValid = validatePassword();

    if (isPasswordValid && password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    }
    // setConfirmPasswordError('')
    else if (isPasswordValid && password == confirmPassword) {
      setTimeout(() => {
        router.push('./'); // Redirect to '/NewPassword' after the delay
      }, 1000); // 10 seconds delay
    }

    // console.log(password);
    // console.log(confirmPassword)

    // Proceed with submitting the form
  };

  return (
    <main
      className={`font-nunito h-[100%] w-[100%] flex flex-col justify-center items-center text-${text_color} relative`}
    >
      {/* <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta name="google-signin-client_id" content="754338394520-dmirr1s2l0mmjs2046j9bitrhip7tmei.apps.googleusercontent.com "></meta> */}
      {/* 
      754338394520-dmirr1s2l0mmjs2046j9bitrhip7tmei.apps.googleusercontent.com */}

      <h1 className={`text-[23px] font-semibold text-${dark_blue} w-[60%]`}>
        Create New Password.
      </h1>
      <p className={`text-${text_color} w-[60%] text-[12.5px]`}>
        Enter new password for your login
      </p>

      <form className="mt-[2rem] flex flex-col items-center justify-around h-[auto] w-[60%] ">
        <Input
          label={'New Password'}
          icon={[<CgPassword />, <AiOutlineEye />, <AiOutlineEyeInvisible />]}
          placeholder={''}
          type={'password'}
          onChange={(e) => passwordHandler(e.target.value)}
          error={passwordError}
        />

        <Input
          label={'Retype New Password'}
          icon={[<CgPassword />, <AiOutlineEye />, <AiOutlineEyeInvisible />]}
          placeholder={''}
          type={'password'}
          onChange={(e) => confirmPasswordHandler(e.target.value)}
          error={confirmPasswordError}
        />
      </form>

      <div className="h-[60px] w-[60%] flex flex-row items-center justify-between text-[13px]">
        {/* <label>
          <input type='checkbox' id='' name='' className='h-[10px] w-[auto]'/>
          Keep me signed in
        </label> */}
      </div>

      <Button
        link={''}
        icon={<BiSolidLockOpenAlt />}
        text={'Reset Password'}
        onClick={submit}
      />

      <p
        className={`text-${ph_color} text-[11px] absolute bottom-0 w-[60%] mb-[2rem] text-center`}
      >
        Don't have an account yet?
        <Link
          href={'./UserProfile'}
          className={`text-${light_blue} underline decoration-${light_blue}`}
        >
          Try for free!
        </Link>
      </p>
    </main>
  );
}
