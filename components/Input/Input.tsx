import React,{FC} from 'react'
import {InputProps} from "./Input.types"


const Input: FC<InputProps> = ({id, disabled, label, message, error, success, onChange, placeholder, ...props}) => {
    return (
      <div>input</div>
    )
}

export default Input;