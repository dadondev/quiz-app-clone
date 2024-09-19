import {bookI} from "@/utils/types";
import useBooksStore from "@/states/books";
import {useEffect, useState} from "react";
import Book from "@/components/book/book";

function AllBooks ({books}:{books:bookI[]}){
    const [datas, setDatas] = useState(books)
    const store = useBooksStore((state)=>state)
    useEffect(()=>{
        setDatas(store.books)
    },[store.books])
    useEffect(() => {
        store.give(books)
    }, []);
    return <div className={"flex justify-center flex-wrap gap-10"}>
        {datas.length > 0 && datas.map((book:bookI, index) => <Book key={index} {...book}/>)}
    </div>
}

export default AllBooks