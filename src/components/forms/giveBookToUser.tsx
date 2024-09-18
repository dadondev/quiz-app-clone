import {IconField} from "primereact/iconfield";
import {InputText} from "primereact/inputtext";
import {ScrollPanel} from "primereact/scrollpanel";
import AllCatalogs from "@/components/forms/allCatalogs";


function GiveBookToUser() {
    return <form className={"grid gap-3 sm:mx-0"}>
        <div className={"grid gap-2"}>
            <IconField iconPosition="left"
                       className={"relative [&>span]:absolute [&>span]:top-1/2 [&>span]:-translate-y-1/2 [&>span]:left-3"}>
                <span className="pi pi-search icon"></span>
                <InputText placeholder="Kitobxon ismini kiriting!" className={"pl-9 !py-2 w-full"}/>
            </IconField>
            <ScrollPanel style={{height: "300px", width: "100%"}}>
                <AllCatalogs/>
            </ScrollPanel>
        </div>
    </form>
}
export default GiveBookToUser