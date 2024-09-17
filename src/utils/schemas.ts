/** @format */
import * as yup from "yup";

export const loginSchema = yup.object({
	phoneNumber: yup
		.string().required("Telefon raqamni kiritish majburiy!").min(11, "Iltimos telefon raqamni to'liq kiriting!")
		.max(12, "Telefon raqam juda uzun!"),
	password: yup
		.string()
		.required("Parolni kiritish majburiy!").min(6,"Iltimos parolni uzaytiring!").max(11, "Iltimos parolni qisqartiring!")
});


export const editBookSchema = yup.object({
	name:yup.string().required("Kitob nomi kiritish majburiy!").min(3,"Kitob nomi juda qisqa!").max(100, "Kitob nomi juda uzun!"),
	pagesCount:yup.number().required("Betlar sonini kiritish majburiy!").min(3, "Betlar soni juda kam!").max(2500,"Betlar soni juda katta!"),
	author:yup.string().required("Muallifni kiritish majburiy!").min(3, "Betlar soni juda kam!").max(2500, "Betlar soni juda ko'p!"),
})
