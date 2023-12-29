import styles from './loginbox.module.css'
import { AiFillLock } from 'react-icons/ai';
import { createRef, useState } from 'react';
import Loading from '../Loading';


function LoginBox() {
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const passwordComfirmationRef = createRef<HTMLInputElement>();
  const [loading, setLoading] = useState(false);



  return (
    <>
      {/* <LoginSuccessFul/> */}
       <div className={styles.login_box}>
        <h1 className='flex text-[#015EB9] font-semibold gap-2 text-xl items-center'> <AiFillLock size={20} color='#015EB9' /> Login</h1>
      <form  className='mt-6'>
        <input ref={emailRef} className='w-full outline-none text-xl border-b-[1px] py-4 h-6  mb-3' placeholder='Email' />
        <input ref={passwordRef} className='w-full outline-none text-xl border-b-[1px] h-6 py-4 mb-3' placeholder='Password' />
        <input ref={passwordComfirmationRef} className='w-full outline-none text-xl border-b-[1px] h-6 py-4 mb-3' placeholder='Password Confirmation' />
        <button type='submit' className=' h-10 mt-5 bg-[#015EB9] w-full text-white'>Login</button>
      </form>
      <p  className='mt-5'>Not account yet? <span className='text-[#015EB9] ml-1 font-semibold'>Register Now!</span></p>
      </div>
      {
        loading && <Loading/>
      }
    </>
  )
}

export default LoginBox