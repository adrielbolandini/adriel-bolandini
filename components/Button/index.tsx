import { ArrowRight } from "phosphor-react";

interface IButton{
    fnctOnClick: ()=>void;
}

export default function Button({fnctOnClick}: IButton){
    return(
        <div className="w-20 hover:opacity-50 hover:bg-slate-400 place-items-center flex rounded-lg" onClick={fnctOnClick}>
            <ArrowRight size={70} color="black" weight="thin" />
        </div>
    )
}