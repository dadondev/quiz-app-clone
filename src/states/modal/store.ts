import {create} from "zustand";
import {modalsT} from "@/utils/types";

type State = {
    modal:modalsT,
    open:boolean,
    currentBook:string
}

type Actions = {
    preferModal:(type:modalsT)=>void,
    close:()=>void,
    giveCurBook:(id:string)=>void,
}
const useModalStore = create<State & Actions>((set) => ({
    close:()=> set((state)=>({open:!state.open})),
    preferModal:(type:modalsT) => set(()=>({modal: type, open:true})),
    giveCurBook:(id:string)=>set(()=>({currentBook:id})),
    modal:"edit",
    open:false,
    currentBook:""
}))
export default useModalStore