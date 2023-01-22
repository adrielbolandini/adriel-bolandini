import Router from "next/router"

export default function Header(){
    return (
        <div className="flex w-screen">
            <img  className='m-6 absolute w-32 resize rounded-full' src='https://avatars.githubusercontent.com/u/64433279?v=4'/>
            <ul className='w-full h-16 max-h-16 pr-32 pl-32 mt-28 mb-8 flex flex-row text-white justify-between text-center items-center bg-blue-600'>
                <li className='basis-1/3 hover:bg-cyan-400 hover:h-full' onClick={()=>Router.push('/')}>
                    Adriel Bolandini
                </li>
                <li className='basis-1/3 hover:bg-cyan-400 hover:h-full' onClick={()=> window.open('https://github.com/adrielbolandini')}>
                        Dev
                </li>
                <li className='basis-1/3 hover:bg-cyan-400 hover:h-full' onClick={()=> window.open('https://www.linkedin.com/in/adrielbolandini/')}>
                    LinkedIn
                </li>
            </ul>
        </div>
    )
}