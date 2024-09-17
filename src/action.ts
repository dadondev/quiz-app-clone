
import {BASE_URL} from "@/utils/utils";
import cookie from "cookie";
import {EditFormI} from "@/utils/types";

export async function deleteBook(id:string){
    const cookies= cookie.parse(document.cookie)
    const resp = await fetch(`${BASE_URL}/books/delete/${id}`, {
        headers:{
            "Content-Type":"application/json",
            authorization:cookies.accessToken
        },
        method:"DELETE",
        cache:"no-cache",
    });
    if(!resp.ok) throw  new Error("O'chirishda muammo bo'ldi!");
    const data = await resp.json()
    return data
}

export async function editBook(id:string, values:EditFormI){
    const cookies= cookie.parse(document.cookie)
    const resp = await fetch(`${BASE_URL}/books/edit/${id}`, {
        method:"PUT",
        body:JSON.stringify(values),
        cache:"no-cache",
        headers:{
            "Content-Type":"application/json",
            authorization:cookies.accessToken
        }
    })
    if(!resp.ok) throw new Error("Tahrirlashda muammo bo'ldi!");
    return await resp.json()
}
