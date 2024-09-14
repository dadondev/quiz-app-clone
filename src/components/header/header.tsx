
import {Button} from "primereact/button";
import {BiMenu} from "react-icons/bi";
import {useState} from "react";
import SidebarMain from "@/components/sidebar/sidebar";
import {Sidebar} from "primereact/sidebar";


function Header() {
    const [open, setOpen] = useState(false);
    function handleOpen() {
        setOpen(!open)
    }
    return <>
        <div className={"hidden md:block md:w-[230px] h-full border-r bg-neutral-50"}>
            <div className={"pt-3"}>
                <Logo/>
            </div>
            <SidebarMain />
        </div>
        <header className={"md:hidden py-3 flex px-5 justify-between items-center border-b sticky top-0 backdrop-blur-sm"}>
            <Logo/>
            <Button onClick={handleOpen} className={"!p-2"}><BiMenu size={20}/></Button>
        </header>
        <Sidebar visible={open} position="right" onHide={handleOpen}>
            <Logo/>
            <SidebarMain />
        </Sidebar>
    </>
}

export default Header


function Logo() {
    return <h1 className={"text-center text-2xl"}>E-kutubxona</h1>
}