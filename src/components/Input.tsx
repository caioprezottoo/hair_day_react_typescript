import React from 'react'

interface InputProps extends React.ComponentProps<"input"> {
    className?: string
}

export default function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={`h-12 p-3 inline-flex items-center justify-center 
                gap-2 self-stretch rounded-lg border border-solid
                border-gray-500 ${className}`}
            {...props}
        />
    )
}
