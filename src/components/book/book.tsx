import BookBadge from "@/components/badges/badge";
import {ReactNode, useState} from "react";
import {Button} from "primereact/button";
import {BiEdit, BiTrash} from "react-icons/bi";
import {FaUserMinus} from "react-icons/fa";
import {AiFillFileUnknown} from "react-icons/ai";
import {CgClose} from "react-icons/cg";


function Book(){
    const [show, setShow] = useState(false)
    function handleShow (){
        setShow(!show)
    }
    return <div className={"relative bg-gradient-to-r from-blue-200 to-blue-600 max-w-[320px] w-full h-[200px] overflow-hidden"}>
        <div className={"absolute top-0 flex justify-end"}>
                <BookBadge type={"borrowed"}/>
        </div>
        <div className={"w-full h-full grid place-items-center cursor-pointer"} onClick={handleShow}>
            <span className={"text-xl"}>Mehrobdan chayon</span>
        </div>
        <div className={"absolute bottom-0 flex w-full"}>
            <PropertyBadge bgColor={"bg-gray-700"}>10 bet</PropertyBadge>
            <PropertyBadge bgColor={"bg-green-500"}>Hans Kristian Andersan</PropertyBadge>
        </div>
        <div data-open={show} className={"absolute top-0 w-full h-full -translate-y-full transition-all data-[open=true]:translate-y-0 bg-black/50"}>
            <Button onClick={handleShow} className={"!p-[6px] !absolute top-2 right-2"}><CgClose size={24}/></Button>
           <div className={"w-full h-full flex justify-center items-center gap-2 flex-wrap"}>
                   <Button type={"button"} severity={"danger"} className={"!p-[6px]"}><BiTrash size={24}/></Button>
               <Button type={"button"} severity={"secondary"} className={"!p-[6px]"}><BiEdit size={24}/></Button>
               <Button type={"button"} severity={"success"} className={"!p-[6px]"}><FaUserMinus size={24} /></Button>
               <Button type={"button"} severity={"warning"} className={"!p-[6px]"}><AiFillFileUnknown size={24} /></Button>
           </div>
        </div>
    </div>
}
export default Book

function PropertyBadge({children, bgColor}:{children: ReactNode, bgColor:string}){
    return <div className={"px-2 py-1 text-white "+ bgColor}>
        <span>{children}</span>
    </div>
}