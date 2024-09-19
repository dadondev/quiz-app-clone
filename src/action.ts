
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


export async function getCatalogs(){
    const cookies = cookie.parse(document.cookie || "")
    const resp = await fetch(BASE_URL + "/catalogs/getAll", {
        headers:{
            Authorization: cookies.accessToken,
        }
    });
    if(!resp.ok) throw new Error("Fetching failed!")
    const data = await resp.json();
    return data
}

export async function createBorrow(bookId:string, userId:string){
    const cookies= cookie.parse(document.cookie)
    const resp = await fetch(`${BASE_URL}/borrow/create`, {
        method:"POST",
        body:JSON.stringify({bookId, userId}),
        headers:{
            "Content-Type":"application/json",
            authorization:cookies.accessToken
        }
    })
    if(!resp.ok) throw new Error("Fetching failed")
    return await resp.json()
}

export async function deleteBorrow(id:string){
    const cookies= cookie.parse(document.cookie)
    const resp = await fetch(`${BASE_URL}/borrow/delete/${id}`, {
        headers:{
            Authorization: cookies.accessToken
        },
        method:'DELETE'
    })
    if(!resp.ok) throw new Error("Fetching failed")
    return await resp.json()
}


export async function changeMissing(id:string, borrowId?:string){
    const cookies = cookie.parse(document.cookie)
    const resp = await fetch(`${BASE_URL}/books/changeStatus/${id}?status=missing` + (borrowId ? `&borrowId=${borrowId}`:""), {
        headers:{
            Authorization: cookies.accessToken
        }
    })
    if(!resp.ok) throw new Error("Fetching failed")
    return await resp.json()
}

export async function createBook(payload:EditFormI){
    const cookies= cookie.parse(document.cookie)
    const resp = await fetch(`${BASE_URL}/books/create`, {
        headers:{
            "Content-Type":"application/json",
            authorization:cookies.accessToken
        },
        body:JSON.stringify(payload),
        method:"POST",
    })
    if(!resp.ok) throw new Error("Fetching failed")
    return await resp.json()

}