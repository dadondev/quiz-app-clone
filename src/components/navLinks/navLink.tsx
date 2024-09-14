import Link from "next/link";
import {NavLinkI} from "@/utils/types";
import {usePathname} from "next/navigation";

function NavLink({url, icon,name}:NavLinkI){
    const pathName= usePathname()
    return <Link href={url}
                 data-active={pathName===url}
          className={"px-5 py-2 text-sm data-[active=true]:text-white flex items-center gap-2 data-[active=true]:bg-blue-500 data-[active=false]:hover:bg-slate-100 rounded-lg hover:opacity-75"}>
        {icon}
        <span>{name}</span>
    </Link>
}
export default NavLink