"use client"
import { CustomButtonProps } from "@/app/types"

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles}: CustomButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`} disabled={false} type={btnType} onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
    </button>
  )
}


export default CustomButton
