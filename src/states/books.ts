import {bookI, EditFormI} from "@/utils/types"
import {create} from "zustand";
interface State {
    books:bookI[] | [],
}

interface Actions {
    give:(books:bookI[])=> void,
    push:(book:bookI)=> void,
    findOne:(id:string)=>void,
    deleteOne:(id:string)=>void,
    clearAllBooks:()=>void,
    currentBook:bookI | null,
    deletedBooks:bookI[] | [],
    pushDelete:(id:string)=>void,
    returnDeletedBook:(id:string)=>void,
    updateOne:(id:string, values:EditFormI)=>void,
    updateStatus:(id:string, values:{borrowId:string|null, status:"borrowed"|"free"|"missing"})=>void
}

const useBooksStore = create<Actions & State>((set) => ({
    deletedBooks:[],
    books:[],
    push:(book:bookI)=> set((state)=>({books:[...state.books,book]})),
    give:(books:bookI[])=>set(()=>({books})),
    findOne:(id:string)=>set((state)=>({currentBook:state.books.find((book:bookI)=>book.id === id)})),
    currentBook:null,
    deleteOne:(id:string)=>set((state)=>({books:state.books.filter((book)=>book.id !== id)})),
    clearAllBooks:()=>set(()=>({books:[]})),
    pushDelete:(id:string)=>set((state)=>({deletedBooks:[...state.deletedBooks, ...state.books.filter((book)=>book.id=== id)], books:state.books.filter((book)=>book.id !== id)})),
    returnDeletedBook:(id:string)=>set((state)=> ({books:[...state.books, ...state.deletedBooks], deletedBooks:state.deletedBooks.filter((book)=>book.id !== id)})),
    updateOne:(id:string, values:EditFormI|bookI)=>set(state=>({ books:state.books.map((e:bookI)=>{
            if(e.id !== id) return e
                return ({
                ...e, ...values
                })
            })})),
    updateStatus:(id, values)=>set((state)=>({books:state.books.map((e)=>e.id !== id ? e : {...e, ...values})}))
}))
export default useBooksStore