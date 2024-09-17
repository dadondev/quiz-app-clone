
import * as yup from "yup"
import {create} from "zustand";



export interface Book {
    pagesCount:number,
    name:string,
    author:string
}

export interface Actions {
    giveAllDatas:(data:Book)=>void,
    setLoading:(type:boolean)=>void,
    giveErrors:(errors:yup.ValidationError|null)=>void
}

export interface StoreI {
    loading:boolean,
    errors:yup.ValidationError| null,
    datas:Book
}

const useEditStore = create<Actions & StoreI>((set)=>{
    return ({
        datas:{
            name:"",
            pagesCount:3,
            author:""
        },
        loading:false,
        errors:{} as yup.ValidationError,
        giveAllDatas:(datas:Book)=>set((state:StoreI)=>({...state, datas})),
        setLoading:(data:boolean)=>set((state:StoreI)=> ({...state, loading:data})),
        giveErrors:(datas:yup.ValidationError | null)=> set((state:StoreI)=>({...state, errors:datas}))
    })
})

export default useEditStore