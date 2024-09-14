import NavLink from "@/components/navLinks/navLink";
import {NavLinkI} from "@/utils/types";
import {ImBooks} from "react-icons/im";
import {GrCatalog, GrGroup} from "react-icons/gr";
import {CiSettings} from "react-icons/ci";

function SidebarMain() {
    return <div className={"px-5 mt-10"}>
        <span>Sahifalar</span>
        <nav className={"pt-3 grid gap-2"}>
            {sidebarLinks.map((e) => <NavLink {...e} key={e.url}/>)}
        </nav>
    </div>
}
export default SidebarMain

const sidebarLinks:NavLinkI[] = [
    {icon: <ImBooks size={20}/>, name:"Kitoblar", url:"/"},
    {icon:<GrCatalog size={20} />, name:"Kataloglar", url:"/catalogs"},
    {icon:<GrGroup size={20} />, name:"Adminlar", url:"/admins"},
    {icon:<CiSettings size={20} />, name:"Sozlamalar", url:"/settings"}
]