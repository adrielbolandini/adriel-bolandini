import * as tailwindcss from 'tailwindcss'; 

export default function Header(){
    return(
        <div className="flex flex-row h-1/6 w-screen ">
            <img  className='m-6 absolute w-32 resize rounded-full' src='https://avatars.githubusercontent.com/u/64433279?v=4'/>
            <ul className='w-full h-full my-28 flex flex-row text-white items-center bg-blue-600'>
                <li className='text-center basis-1/3 '>Inicio</li>
                <li className='text-center basis-1/3 '>Projetos</li>
                <li className='text-center basis-1/3 '>LinkedIn</li>
            </ul>
        </div>
    )
}