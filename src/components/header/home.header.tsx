import {Button} from "primereact/button";
import {BiSolidBookAdd} from "react-icons/bi";
import {modalsT} from "@/utils/types";
import useModalStore from "@/states/modal/store";

function HomeHeader(){
    const {  preferModal} = useModalStore()
    const openModal = (type:modalsT)=>{
        preferModal(type)
    }
    function handler(type:modalsT){
        openModal(type)
    }
    return <header className={"border-b py-4 w-full px-4 flex justify-between items-center"}>
<span className={"text-xl"}>Kitoblar</span>
        <div className={"[&>button]:!p-2"}>
            <Button onClick={()=>handler("addBook")}>
                <BiSolidBookAdd size={16} />
            </Button>
        </div>
    </header>
}

export default HomeHeader