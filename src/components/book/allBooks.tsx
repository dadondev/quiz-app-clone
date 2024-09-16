import {bookI} from "@/utils/types";
import useBooksStore from "@/states/books";
import {useEffect} from "react";
import Book from "@/components/book/book";

function AllBooks ({books}:{books:bookI[]}){
    const store = useBooksStore((state)=>state)
    useEffect(()=>{
        store.give(books)
    },[])
    return <div className={"flex justify-center flex-wrap gap-10"}>
        {store.books.length && store.books.map((book:bookI, index) => <Book key={index} {...book}/>)}
    </div>
}

export default AllBooks