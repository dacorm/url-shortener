import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";



export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant?: string;
    size?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    children: ReactNode
}