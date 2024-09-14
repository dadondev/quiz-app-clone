import {NavLinkI} from "@/utils/types";
import {ImBooks} from "react-icons/im"
import {GrCatalog, GrGroup} from "react-icons/gr";
import {CiSettings} from "react-icons/ci";

export const sidebarLinks:NavLinkI[] = [
    {icon: <ImBooks size={20}/>, name:"Kitoblar", url:"/"},
    {icon:<GrCatalog size={20} />, name:"Kataloglar", url:"/catalogs"},
    {icon:<GrGroup size={20} />, name:"Adminlar", url:"/admins"},
    {icon:<CiSettings size={20} />, name:"Sozlamalar", url:"/settings"}
]