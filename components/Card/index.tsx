import { ReactNode } from "react";

interface ICard{
    cardImg?: string;
    title: string;
    children: ReactNode
}

export default function Card({cardImg, title,children}: ICard){
    return (
        <div className="flex flex-row p-4 text-white">
            <img src={cardImg}/>
            <div className="ml-4">
                <h1 className="text-3xl font-semibold mb-4">{title}</h1>
                <a> 
                    <p className="my-4">{children}</p>
                </a>
            </div>
        </div>
    )
}