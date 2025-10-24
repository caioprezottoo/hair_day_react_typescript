import { cva } from "class-variance-authority";

export const textVariants = cva("font-sans", {
    variants: {
        variant: {
            "text-sm": "text-sm leading-5 font-normal text-gray-300",
            "text-md": "text-base leading-6 font-normal text-gray-200",
            "title-sm": "text-sm leading-5 font-bold text-gray-100",
            "title-md": "text-base leading-6 font-bold text-gray-100",
            "title-lg": "text-3xl leading-6 font-bold text-gray-100 m-1",
        }
    },
    defaultVariants: {
        variant: "text-sm"
    }
})