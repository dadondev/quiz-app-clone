import {Button} from "primereact/button";
import {CheckIcon} from "primereact/icons/check";
import {GrClose} from "react-icons/gr";
import useModalStore from "@/states/modal/store";
import { deleteBorrow} from "@/action";
import toast from "react-hot-toast";
import useBooksStore from "@/states/books";

function RemoveUser(){
    const {close}= useModalStore()
    const { updateStatus, currentBook } = useBooksStore()
    async function handleClick(){
            close()
            const fetchData = deleteBorrow(currentBook!.borrowId!);
            await toast.promise(fetchData, {
                loading:"Tastiqlanmoqda...",
                error:"Tastiqlashda xatolik. Iltimos qayta urinib ko'ring!",
                success:"Tastiqlandi!"
            })
            updateStatus(currentBook!.id!, {status:"free", borrowId:null})
    }
    return <div>
        <h1 className={"text-xl"}>Siz kitobni olganingiz tastiqlashingiz lozim!</h1>
        <div className={"grid grid-cols-2 gap-3 mt-5 [&>button]:justify-center [&>button]:!py-2"}>
            <Button severity={"danger"} onClick={close}><GrClose size={24}/></Button>
            <Button severity={"success"} onClick={handleClick}><CheckIcon width={24} height={24}/></Button>
        </div>
    </div>
}

export default RemoveUser