/** @format */
import {ReactNode} from "react";

export interface loginI {
	phoneNumber: string;
    password:string
}

export interface registerDataI {
    user:{
        firstName:string,
        id: string,
        lastName:string,
        phoneNumber:string,
        role:"secondary"|"primary"
    },
    tokens:{
        accessToken:string,
        refreshToken:string,
    }
}

export interface NavLinkI {
    icon:ReactNode,
    url:string,
    name:string
}

export type modalsT = "edit"|"delete"|"removeUser"|"addUser"|"missing"|"addUserToBook"

export interface bookI {
    name:string,
    pagesCount:number,
    status:"borrowed"|"free" |"missing",
    id:string,
    author:string,
    borrowId:string | null
}

export interface EditFormI {
    pagesCount:number,
    name:string,
    author:string,
}

export interface CatalogI {
    id:string,
    firstName:string,
    lastName:string,
    phoneNumber:string,
    parents:ParentI[],
    birthday:Date,
    address:string,
    job:string
}

export interface ParentI {
    firstName:string,
    lastName:string,
    phoneNumber:string,
    job:string,
    role:string
}

export interface AllCatalogI {
    loading:boolean,
    datas:CatalogI[]|[]
}