/** @format */

import { loginI } from "@/utils/types";
import { BASE_URL } from "@/utils/utils";
import axios from "axios";

const characters = ["(", ")", " ", "-"]

export async function login(value: loginI) {
	const phoneNumber ="+998"+(value.phoneNumber.split("").filter((str:string)=> !characters.includes(str)).join(""))
	const resp = await fetch(BASE_URL+"auth/getAll")
	console.log(resp)
	return resp
}
