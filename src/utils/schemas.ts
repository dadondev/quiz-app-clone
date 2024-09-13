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
