import BookBadge from "@/components/badges/badge";
import {ReactNode, useState} from "react";
import {Button} from "primereact/button";
import {BiEdit, BiTrash} from "react-icons/bi";
import {FaUserMinus} from "react-icons/fa";
import {AiFillFileUnknown} from "react-icons/ai";
import {CgClose} from "react-icons/cg";
import useModalStore from "@/states/modal/store";
import {bookI, modalsT} from "@/utils/types";
import useBooksStore from "@/states/books";
import {TiUserAdd} from "react-icons/ti";


function Book({name,status,author,pagesCount, id, borrowId}:bookI){
    const {preferModal, giveCurBook} = useModalStore()
    const { findOne } = useBooksStore()
    const [show, setShow] = useState(false)
    const borrowed = status === "borrowed"
    function handleShow (){
        setShow(!show)
    }
    const openModal = (type:modalsT)=>{
        preferModal(type)
    }
    function handleDelete(){
        giveCurBook(id)
        openModal("delete")
    }
    function handler(type:modalsT){
        giveCurBook(id)
        findOne(id)
        openModal(type)
    }
    return <div className={"relative bg-gradient-to-r from-blue-200 to-blue-600 max-w-[320px] w-full h-[200px] overflow-hidden"}>
        <div className={"absolute top-0 flex justify-end"}>
                <BookBadge type={status}/>
        </div>
        <div className={"w-full h-full grid place-items-center cursor-pointer"} onClick={handleShow}>
            <span className={"text-xl"}>{name}</span>
        </div>
        <div className={"absolute bottom-0 flex w-full grid grid-cols-[auto_1fr]"}>
            <PropertyBadge bgColor={"bg-gray-700"}>{pagesCount} bet</PropertyBadge>
            <PropertyBadge bgColor={"bg-green-500"}>{author}</PropertyBadge>
        </div>
        <div data-open={show} className={"absolute top-0 w-full h-full -translate-y-full transition-all data-[open=true]:translate-y-0 bg-black/50"}>
            <Button onClick={handleShow} className={"!p-[6px] !absolute top-2 right-2"}><CgClose size={24}/></Button>
           <div className={"w-full h-full flex justify-center items-center gap-2 flex-wrap [&>button]:!p-[6px]"}>
               {!borrowed && <Button type={"button"} onClick={handleDelete} severity={"danger"}
                        className={"!p-[6px]"}><BiTrash size={24}/></Button>}
               <Button type={"button"} severity={"secondary"} className={"!p-[6px]"} onClick={()=>handler("edit")}><BiEdit size={24}/></Button>
               {(borrowed && borrowId) &&<Button type={"button"} severity={"danger"} className={"!p-[6px]"} onClick={()=>handler("removeUser")}><FaUserMinus size={24}/></Button>}
               {status ==="free" && <Button severity={"success"} onClick={()=>handler("addUserToBook")}><TiUserAdd size={24}/></Button>}
               <Button type={"button"} severity={"warning"} className={"!p-[6px]"}><AiFillFileUnknown size={24} /></Button>
           </div>
        </div>
    </div>
}
export default Book

export function PropertyBadge({children, bgColor}:{children: ReactNode, bgColor:string}){
    return <div className={"px-2 py-1 text-white "+ bgColor}>
        <span>{children}</span>
    </div>
}