import { redirect } from "next/dist/server/api-utils"
import Router from "next/router"

export default function Header(){
    return(
        <div className="flex flex-row h-16 w-screen ">
            <img  className='m-6 absolute w-32 resize rounded-full' src='https://avatars.githubusercontent.com/u/64433279?v=4'/>
            <ul className='w-full h-full pr-32 pl-32 my-28 flex flex-row text-white justify-between text-center items-center bg-blue-600'>
                <li className='basis-1/3 hover:bg-cyan-400 hover:h-full' onClick={()=>Router.push('/')}>Adriel Bolandini</li>
                <li className='basis-1/3 hover:bg-cyan-400 hover:h-full'>Dev</li>
                <li className='basis-1/3 hover:bg-cyan-400 hover:h-full' onClick={()=>Router.replace('www.google.com')}>LinkedIn</li>
            </ul>
        </div>
    )
}