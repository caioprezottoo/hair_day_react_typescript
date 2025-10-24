import type { VariantProps } from 'class-variance-authority';
import React from 'react'
import { buttonVariants } from '../variants/button-variants';
import { textVariants } from '../variants/text-variants';

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    children?: React.ReactNode;
}

export default function Button({ children, variant, className, ...props }: ButtonProps) {
    return (
        <button
            className={`
                ${buttonVariants({ variant, className })} 
                ${textVariants({ variant: "title-sm" })}
                `}
            {...props}
        >
            {children}
        </button>
    )
}