import React,{FC} from 'react'
import {ButtonProps} from "./Button.types"

const Button: FC<ButtonProps> = ({size, primary, disabled, text, onClick, ...props}) => {
    return (
        <button>Boton de dani</button>
    )
}

export default Button;