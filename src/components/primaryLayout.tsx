import Sidebar from "@/components/header/header";
import {ReactNode} from "react";


function PrimaryLayout ({children}: { children: ReactNode }){
    return <div className={"h-full md:grid md:grid-cols-[auto_1fr]"}>
        <Sidebar/>
        {children}
    </div>
}
export default PrimaryLayout