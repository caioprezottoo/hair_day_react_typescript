import type { VariantProps } from 'class-variance-authority'
import React from 'react'
import { timeSelectVariants } from '../variants/time-select-variants'
import { textVariants } from '../variants/text-variants'

interface TimeSelectProps extends React.ComponentProps<"button">, VariantProps<typeof timeSelectVariants> {
    children?: React.ReactNode,
    className?: string
}

export default function TimeSelect({ children, variant, className, ...props }: TimeSelectProps) {
    return (
        <button
            className={`
                ${timeSelectVariants({ variant, className })}
                ${textVariants({ variant: "text-md" })}
                `}
            {...props}
        >
            {children}
        </button>
    )
}
