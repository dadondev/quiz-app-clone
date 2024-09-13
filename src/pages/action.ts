import axios from "axios";
import {registerDataI} from "@/utils/types";
import Cookies from "js-cookie";
import {BASE_URL} from "../utils/utils"


export async function login(phoneNumber:string, password:string){
    const resp = await axios.post<registerDataI>(`${BASE_URL}/auth/login`, {phoneNumber:phoneNumber,password:password}, {
        withCredentials:true
    });
    const today = new Date()
    today.setTime(today.getTime() + (12 * 60 * 60 * 1000));
    Cookies.set("accessToken", resp.data.tokens.accessToken, {expires:today})
    Cookies.set("refreshToken", resp.data.tokens.refreshToken, {expires:30})
    return resp.data.user
}
