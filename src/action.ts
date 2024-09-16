
import {BASE_URL} from "@/utils/utils";
import cookie from "cookie";


export async function deleteBook(id:string){
    const cookies= cookie.parse(document.cookie)
    const resp = await fetch(`${BASE_URL}/books/delete/${id}`, {
        headers:{
            "Content-Type": "application/json",
            authorization:cookies.accessToken
        },
        method:"DELETE",
        cache:"no-cache",
    });
    if(!resp.ok) throw  new Error("O'chirishda muammo bo'ldi!");
    const data = await resp.json()
    return data
}