import {Button} from "primereact/button";
import {GrClose} from "react-icons/gr";
import {CheckIcon} from "primereact/icons/check";
import useModalStore from "@/states/modal/store";
import useBooksStore from "@/states/books";
import {changeMissing} from "@/action";
import toast from "react-hot-toast";2

function MissingModal (){
    const {currentBook, updateStatus} = useBooksStore()
    const {close}= useModalStore()
    async function handleClick(){
        close()
        const fetchData = changeMissing(currentBook!.id, currentBook?.borrowId ? currentBook.borrowId:undefined)
        const resp = await toast.promise(fetchData, {
            loading:"Kitob yo'qotilmoqda...",
            success:"Kitob yo'qotilgan deb topildi!",
            error:"Kitobni yo'qotishda xatolik!"
        })
        updateStatus(currentBook!.id, {...resp})
    }
    return <div>
        <h1 className={"text-xl text-center"}>
            Siz aynan shu kitobni yo`qotilgan qilmoqchisiz. Iltimos tastiqlang!
        </h1>
        <div className={"grid grid-cols-2 gap-3 mt-5 [&>button]:justify-center [&>button]:!py-2"}>
            <Button severity={"danger"} onClick={close}><GrClose size={24}/></Button>
            <Button severity={"success"} onClick={handleClick}><CheckIcon width={24} height={24}/></Button>
        </div>
    </div>
}

export default MissingModal