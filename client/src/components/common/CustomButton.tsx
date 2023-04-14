import React from 'react'
import { Button, fontWeight, textTransform } from '@pankod/refine-mui'
import { CustomButtonProps } from 'interfaces/common'

const CustomButton = ({
   type, title, backgroundColor, color, fullWidth, icon, disabled, handleClick }: CustomButtonProps) => {
   return (
      <Button
         disabled={disabled}
         type={type === 'submit' ? 'submit' : 'button'}
         sx={{
            flex: fullWidth ? 1 : 'unset',
            padding: "10px 20px",
            width: fullWidth ? "100%" : "fit-content",
            minWidth: "130px",
            backgroundColor,
            color,
            fontSize: "16px",
            fontWeight: "600",
            gap: "10px",
            textTransform: "capitalize",
            '&:hover': {
               opacity: 0.9,
               backgroundColor,
            }
         }}
         onClick={handleClick}
      >
         {icon}
         {title}
      </Button>
   )
}

export default CustomButton