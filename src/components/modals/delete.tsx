import {Button} from "primereact/button";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {CheckIcon} from "primereact/icons/check";
import toast from "react-hot-toast";
import useModalStore from "@/states/modal/store";
import useBooksStore from "@/states/books";
import {deleteBook} from "@/action";



function DeleteModal(){
    const {close, currentBook} = useModalStore()
    const {pushDelete, findOne, returnDeletedBook} = useBooksStore()

    async function handleDelete(){
        findOne(currentBook)
        pushDelete(currentBook)
        close()
        try{
            const fetchingData = deleteBook(currentBook)
            await toast.promise(fetchingData, {
                loading:"O'chirilmoqda...",
                success:"Kitob o'chirilib tashlandi!",
                error:"O'chirishda xatolik!",
            })
        }catch (_) {
            returnDeletedBook(currentBook)
        }
    }
    return <div className={"grid gap-4"}>
        <p className={"text-xl"}>Kitobni o`chirishingizni tastiqlashingiz lozim!</p>
        <div className={"flex flex-row-reverse w-full gap-3"}>
            <Button onClick={handleDelete} severity={"success"} className={"w-full text-center justify-center !py-2"}><CheckIcon strokeWidth={3}/></Button>
            <Button onClick={close} severity={"danger"} className={"w-full text-center justify-center !py-2"}><CloseIcon /></Button>
        </div>
    </div>
}
export default DeleteModal