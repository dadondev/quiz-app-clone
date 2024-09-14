import {sidebarLinks} from "@/utils/constantans";
import NavLink from "@/components/navLinks/navLink";

function SidebarMain() {
    return <div className={"px-5 mt-10"}>
        <span>Sahifalar</span>
        <nav className={"pt-3 grid gap-2"}>
            {sidebarLinks.map((e) => <NavLink {...e} key={e.url}/>)}
        </nav>
    </div>
}
export default  SidebarMain