import React from 'react'
import Icon from './Icon'

interface InputProps extends React.ComponentProps<"input"> {
    className?: string
    icon?: React.FC<React.ComponentProps<"svg">>
}

export default function Input({ className, icon: IconSvg, ...props }: InputProps) {
    return (
        <div className="relative w-full">
            {IconSvg && (
                <Icon
                    svg={IconSvg}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 
                        w-5 h-5 pointer-events-none`}
                />
            )}
            <input
                className={`h-12 p-3 pl-10 inline-flex items-center justify-center 
                gap-2 self-stretch rounded-lg border border-solid
                border-gray-500 focus:border-yellow-dark
                text-gray-200 outline-none ${className}`}
                {...props}
            />
        </div>
    )
}

