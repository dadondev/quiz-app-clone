import {Avatar} from "primereact/avatar";
import {Button} from "primereact/button";
import {Ripple} from "primereact/ripple";
import {confirmDialog} from "primereact/confirmdialog";
import toast from "react-hot-toast";
import useModalStore from "@/states/modal/store";
import {CatalogI} from "@/utils/types";
import {createBorrow} from "@/action";
import useBooksStore from "@/states/books";

export async function getServerSideProps(){

}

function User({firstName,lastName, id}:CatalogI) {
    const {close} = useModalStore()
    const { currentBook, updateStatus } = useBooksStore()
    async function handleAccept(){
        close()
        const fetchData = createBorrow(currentBook!.id, id)
        const resp = await toast.promise(fetchData, {
            error:"Kitobni topshirishda xatolik. Iltimos qayta urining!",
            success:"Kitobni muvaffaqiyatli tarzda berildi!",
            loading:"Berilmoqda..."
        })
        updateStatus(currentBook!.id , {status:"borrowed", borrowId:resp.id})
    }
    const showTemplate = () => {
        confirmDialog({
            header: 'Iltimos e`tiborli bo`ling!',
            message: (
                <div className="flex items-center w-full gap-3 border-bottom-1 surface-border">
                    <i className="pi pi-exclamation-circle text-2xl text-yellow-500"></i>
                    <span>Haqiqatdan ham kitobni shu kitobxonga bermoqchimisiz?</span>
                </div>
            ),
            rejectClassName:"!bg-red-500 !border-red-500",
            accept:handleAccept
        });
    };
    return <div className={"flex justify-between items-center border-b py-3"}>
        <div className={"flex items-center gap-3"}>
            <Avatar icon={"pi pi-user"} size={"normal"}/>
            <span className={"font-semibold"}>{firstName} {lastName}</span>
        </div>
        <Button className={"!py-1"} type={"button"} rounded onClick={showTemplate}>Berish <Ripple/></Button>
    </div>
}

export default User