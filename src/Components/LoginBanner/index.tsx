import styles from './loginbanner.module.css'
import LoginBox from '../LoginBox'

function LoginBanner() {


  return (
      <div className={styles.login_banner}>
          <div className='text-black w-1/2'>
              <h4 className='text-4xl font-semibold'>Welcome to</h4>
              <h1 className='text-6xl '><span className="text-[#015EB9] font-bold">KBZ</span> ONLINE </h1>
              <h1 className='text-6xl w-1/3'>BANKING</h1>
          </div> 
           <LoginBox />
    </div>
  )
}

export default LoginBanner