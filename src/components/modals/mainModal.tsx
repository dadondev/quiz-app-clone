"use client"
import useModalStore from "@/states/modal/store";
import {Dialog} from "primereact/dialog";
import DeleteModal from "@/components/modals/delete";
import EditModal from "@/components/modals/edit";
import AddUserToBook from "@/components/modals/addUserToBook";
import RemoveUser from "@/components/modals/removeUser";
import MissingModal from "@/components/modals/missing";
import CreateBook from "@/components/modals/createBook";


const modals = {
    edit:<EditModal/>,
    delete:<DeleteModal/>,
    removeUser:<RemoveUser/>,
    addUser:<>salom user</>,
    missing:<MissingModal/>,
    addUserToBook:<AddUserToBook></AddUserToBook>,
    addBook:<CreateBook></CreateBook>
}


function MainModal(){
    const {open, close, modal} = useModalStore((state)=>state)
    return <Dialog modal visible={open} onHide={close} className={"max-w-[400px] w-full [&>*]:p-3 shadow-none mx-2 sm:mx-0"}>
        {modals[modal]}
    </Dialog>
}

export default MainModal