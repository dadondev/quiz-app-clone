import {CatalogI} from "@/utils/types";
import {create} from "zustand";

interface Actions {
    push:(data:CatalogI)=>void;
    deleteOne:(id:string)=>void
    updateOne:(id:string, data:CatalogI)=>void;
    clearAll:()=>void;
    returnDeleted:(id:string)=>void

}
interface Store {
    catalogs:CatalogI[] | [];
    currentCatalog:CatalogI | null;
    deletedCatalogs:CatalogI[] | []
}

const useCatalogsStore = create<Actions & Store>((set)=>{
    return ({
        catalogs:[],
        currentCatalog:null,
        deletedCatalogs:[],
        push:(data)=>set((state)=>({catalogs:[...state.catalogs, data]})),
        clearAll:()=>set({catalogs:[]}),
        deleteOne:(id:string)=> set((state)=>({catalogs:state.catalogs.filter((catalog)=>catalog.id !== id)})),
        returnDeleted:(id:string)=>set((state)=> ({catalogs:[...state.catalogs, ...state.deletedCatalogs.filter((data)=>data.id ===id) ]})),
        updateOne:(id, data)=>set((state)=>({catalogs:state.catalogs.map((e)=> e.id === id ? data :e )}))
    })
})

export default useCatalogsStore