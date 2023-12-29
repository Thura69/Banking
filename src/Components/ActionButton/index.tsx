import React, { FunctionComponent } from 'react'
import { actionButtonProps } from '../../Types/Actionbutton'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const ActionButton:FunctionComponent<actionButtonProps> = ({title,route,bgColor,onClickHandler}) => {
  return (
      <a
          href={route || "/"}
          className='mt-4 w-fit text-white font-[700] flex items-center justify-center gap-2 rounded-full px-6 py-2'
          style={{ backgroundColor: bgColor || "#FF545F" }}
          onClick={onClickHandler}
      >
          {title}
          <HiOutlineArrowNarrowRight fontSize={24}/>
      </a>
  )
}

export default ActionButton