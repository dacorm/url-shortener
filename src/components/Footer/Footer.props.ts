import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";



export interface FooterProps {

}

export interface MenuGroupProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    groupTitle: string;
    links: any[];

}