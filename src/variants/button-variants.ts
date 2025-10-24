import { cva } from "class-variance-authority";

export const buttonVariants = cva(`
    bg-yellow px-4 inline-flex items-center 
    justify-center rounded-lg text-gray-900
    w-[21.25rem] h-14 border-2
    border-transparent`, {
    variants: {
        variant: {
            "default": "hover:border-yellow-light cursor-pointer",
            "disabled": "opacity-30"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})