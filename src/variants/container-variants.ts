import { cva } from "class-variance-authority";

export const containerVariants = cva("mx-auto", {
    variants: {
        size: {
            md: "max-w-[31.5rem]"
        }
    },
    defaultVariants: {
        size: "md"
    }
})