"use client"
import useModalStore from "@/states/modal/store";
import {Dialog} from "primereact/dialog";
import DeleteModal from "@/components/modals/delete";
import EditModal from "@/components/modals/edit";

const modals = {
    edit:<EditModal/>,
    delete:<DeleteModal/>,
    removeUser:<>helooo</>,
    addUser:<>salom user</>,
    missing:<>hello user</>
}


function MainModal(){
    const {open, close, modal} = useModalStore((state)=>state)
    return <Dialog modal visible={open} onHide={close} className={"max-w-[400px] w-full [&>*]:p-3 shadow-none"}>
        {modals[modal]}
    </Dialog>
}

export default MainModal