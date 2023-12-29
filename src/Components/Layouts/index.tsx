import React, { FunctionComponent } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { LayoutProps } from '../../Types/Layout'

const Layout:FunctionComponent<LayoutProps> = ({blog,children,login} :any) =>{
  return (
    <div>
    <NavBar login={login} blog={blog} />
    <div className='relative'>{children}</div>
    <Footer/>
    </div>
  )
}

export default Layout