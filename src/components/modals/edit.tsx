import useBooksStore from "@/states/books";
import {useReducer} from "react";
import {FloatLabel} from "primereact/floatlabel";
import {InputText} from "primereact/inputtext";


function reducer(state:any , action: any) {

}


function init (){

}
const defaultState = {
    pagesCount:3,
    name:"",
    author:""
}

function EditModal(){
    const { currentBook } = useBooksStore((state)=>state)
    const  defaultValue = !currentBook ? defaultState : currentBook
    const [state, dispatch] = useReducer(reducer, defaultValue, init)
    console.log(state)
    return <form onSubmit={e => e.preventDefault()}>
        <div className={"grid gap-2"}>
            <label htmlFor="username">Username</label>
            <InputText defaultValue={defaultState.name} id="username" className={"!py-2"}/>
        </div>
    </form>
}

export default EditModal;