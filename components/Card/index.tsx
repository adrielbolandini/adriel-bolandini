import { Cpu, Laptop, RocketLaunch } from "phosphor-react";


export default function Card(){
    return (
        <div className="flex flex-row p-4 text-white">
            <img src="https://avatars.githubusercontent.com/u/64433279?v=4"/>
            <div className="ml-4">
                <h1 className="text-3xl font-semibold mb-4">Sobre mim</h1>
                <a>
                    Me chamo Adriel Bolandini, sou formado em Bacharelado em Química aela Universidade Federal de Viçosa (2015). 
                    <p className="my-4">Em 2022, me formei na Faculdade Unyleya no curso de Qualidade e Segurança dos Alimentos.</p>
                    Meu conhecimento de programação vêm de cursos e bootcamps, como exemplo:
                    <ul className="my-4">
                        <li className="flex flex-row my-2 items-center">
                            <Laptop size={32} color='white' className="mx-2"/>
                            Desenvolvedor Full Stack - IGTI
                        </li>
                        <li className="flex flex-row my-2 items-center">
                            <RocketLaunch size={32} color='white' className="mx-2"/>
                            Bootcamps Rocketseat
                        </li>
                        <li className="flex flex-row my-2 items-center">
                            <Cpu size={32} color='white' className="mx-2"/>
                            Bootcamp Sysmap
                        </li>
                    </ul>
                </a>
            </div>
        </div>
    )
}