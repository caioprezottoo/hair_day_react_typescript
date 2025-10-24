import { cva } from "class-variance-authority";

export const timeSelectVariants = cva(`
    inline-flex w-20 h-10 px-2 py-5 justify-center
    items-center shrink-0 rounded-lg border 
    border-gray-500 bg-gray-600
    `, {
    variants: {
        variant: {
            "default": "hover:bg-gray-500 cursor-pointer",
            "disabled": "opacity-30",
            "active": "border-yellow text-yellow cursor-pointer hover:bg-gray-500"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})