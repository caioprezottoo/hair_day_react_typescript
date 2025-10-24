import React from 'react'
import Icon from './Icon'

interface ButtonIconProps extends React.ComponentProps<"button"> {
    icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function ButtonIcon({ icon, ...props }: ButtonIconProps) {
    return (
        <button
            className='inline-flex items-center w-8 h-8 shrink-0 justify-center hover:opacity-30 cursor-pointer'
            {...props}
        >
            <Icon svg={icon} />
        </button>
    )
}