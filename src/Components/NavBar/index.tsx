import { FunctionComponent,useEffect,useRef, useState } from 'react'
import { NavBarProps } from '../../Types/Navbar'
import './navbar.module.css'
import { SlScreenSmartphone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'


const NavBar: FunctionComponent<NavBarProps> = ({ blog,login }) => {
  const inputRef: any = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const [activeStatus, setActiveStatus] = useState('home');


  const handleClick = () => {
    inputRef.current.focus();
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
    }
    if (blog) {
      setActiveStatus('blog');
    }
    if (login) {
      setActiveStatus('login');
    }
  },[open,blog,login])

  return (
    <>
  <div className='w-full '>
  <div className='px-48 flex items-center shadow justify-around p-4 bg-[#DFF6FF]'>
  <h6 className='text-md'>
  <a
  href='tel:09265577722'
  className='flex items-center gap-1'
  >
  <SlScreenSmartphone size={18} color="#015EB9"/>
    +959 265577722
  </a>
  </h6>
  <h6 className='text-sm'> 
  <a href='/'>
  UPDATES – Click Here for KBZ Money News Alerts – UPDATES  
  </a>
  </h6>
  <h6 className='text-md'>
    <a 
    href='mailto: admin@kbzmoney.com'
    className='flex items-center gap-2'
    >
    admin@kbzmoney.com 
    <TfiEmail size={18} color='#015EB9'/>
    </a>
  </h6>
  </div>
  </div>
  <div className='flex px-48 h-[90px] justify-between  !shadow items-center bg-white'>
  <div className='flex items-center justify-center'>
   <a href='/'>
    <img src='/assets/logo.svg' alt='logo' width={200} height={200}/>
   </a>
   <ul className='flex items-center ml-20 gap-8'>
    <li
    className={activeStatus === "home"? styles.active:styles.normal}
    >
      <Link to="/">Home</Link>
    </li>
    <li
    className={activeStatus === "blog"? styles.active:styles.normal}
    >
      <Link to="/blog">Blog</Link>
    </li>
     <li
    className={activeStatus === "login"? styles.active:styles.normal}
    >
      <Link to="/login">Login</Link>
    </li>
   </ul>
  </div>
  <div className='flex items-center'>
    <input
    ref={inputRef}
    autoFocus={open}
    style={{display:open ? "flex" : "none"}}
    type='search'
    placeholder='Search Here'
    className='py-2 px-3 text-md mr-4 border-2 rounded-md'
    />
    <AiOutlineSearch size={26} cursor={"pointer"} onClick={handleClick}/>
  </div>
  </div>
    </>
  )
}

export default NavBar