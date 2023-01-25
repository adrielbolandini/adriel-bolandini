import Router from "next/router"
import { ReactNode } from "react";

//img https://avatars.githubusercontent.com/u/64433279?v=4
//<img  className='m-6 absolute w-32 resize rounded-full' src={imgSrc}/>
interface IHeader{
    url: string;
    redirect: boolean;
    children: ReactNode
}

export default function Header({url, redirect, children}: IHeader){
    function Click(redirect: boolean, url: string){
        if (redirect === false) {
            Router.push(url)
        } 
        else window.open(url)
    }

    return (
                <li className='basis-1/3 hover:bg-cyan-400 hover:h-full' onClick={()=>Click(redirect, url)}>
                    {children}
                </li>
    )
}