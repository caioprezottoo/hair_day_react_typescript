import React from 'react'
import Icon from './Icon'

interface ButtonIconProps extends React.ComponentProps<"button"> {
    icon: React.ComponentProps<typeof Icon>["svg"]
    className?: string
}

export default function ButtonIcon({ className, icon, ...props }: ButtonIconProps) {
    return (
        <button
            className={`inline-flex items-center w-8 h-8 shrink-0 justify-center hover:opacity-30 cursor-pointer transition duration-400" ${className}`}
            {...props}
        >
            <Icon svg={icon} />
        </button>
    )
}