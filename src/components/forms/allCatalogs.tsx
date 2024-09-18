import {useEffect, useState} from "react";
import {getCatalogs} from "@/action";
import {AllCatalogI, CatalogI} from "@/utils/types";
import User from "@/components/user/user";
import {CgSpinner} from "react-icons/cg";




function AllCatalogs(){
    const STATE:AllCatalogI = {
        loading:true,
        datas:[]
    }
    const [datas, setDatas] = useState(STATE);

    useEffect(() => {
        getCatalogs().then((e:CatalogI[] | [])=>{
            setDatas({loading:false, datas: e})
        })
    }, []);
    return <>{
        datas.loading ? <CgSpinner
            className={"spin mx-auto"} size={30}/>:datas.datas.length > 0 ? datas.datas.map((e)=><User {...e} key={e.id}/>):<></>
    }</>
}

export default AllCatalogs