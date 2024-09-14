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