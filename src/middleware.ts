import { NextRequest, NextResponse } from 'next/server'
import jwt from "jsonwebtoken"
import {secret} from "./utils/utils"

export default async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/auth")) {
        return NextResponse.next();
    }

    const accessToken = req.cookies.get("accessToken");
    const refreshToken = req.cookies.get("refreshToken");

    if (!accessToken) {
        return NextResponse.redirect(new URL("/auth", req.url));
    }
    if (!refreshToken) {
        return NextResponse.redirect(new URL("/auth", req.url));
    }
    if (verifyToken(accessToken.value, refreshToken.value)) {
        return NextResponse.redirect(new URL("/auth", req.url));
    }

    return NextResponse.next();
}


function verifyToken(accessToken: string, refreshToken: string) {
    try{
        jwt.verify(accessToken, secret, {complete:true})
        jwt.verify(refreshToken, secret,{complete:true})
        return false
    }catch(error){
        const err = error as Error
        if(err.name === "Error") return false
        return true
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}