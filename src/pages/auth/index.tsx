"use client"
import {InputMask} from "primereact/inputmask";
import {Button} from "primereact/button";
import PasswordInput from "@/components/password/input";
import {CgSpinner} from "react-icons/cg";
import {useRouter} from "next/navigation";
import {Form, Formik} from "formik";
import {loginSchema} from "@/utils/schemas";
import toast from "react-hot-toast";
import axios from "axios";
import {registerDataI} from "@/utils/types";
import Cookies from "js-cookie";
import { BASE_URL } from "@/utils/utils"

const initialValues = {
    password: "",
    phoneNumber:""
}

async function login(phoneNumber:string, password:string){
    const resp = await axios.post<registerDataI>(`${BASE_URL}/auth/login`, {phoneNumber,password}, {
        withCredentials:true
    });
    if(resp.status === 200){
        const today = new Date()
        today.setTime(today.getTime() + (12 * 60 * 60 * 1000));
        Cookies.set("accessToken", resp.data.tokens.accessToken, {expires:today})
        Cookies.set("refreshToken", resp.data.tokens.refreshToken, {expires:30})
        return resp.data.user
    }
    return resp.data
}


function Page(){
    const router = useRouter()
    const handleSubmit = async (e= initialValues) => {
        let phoneNumber = e.phoneNumber
        const password = e.password
        phoneNumber = phoneNumber.replaceAll(" ", "")
        phoneNumber ="+998" + phoneNumber.replaceAll("-", "")
        try{
            toast.loading("Yuklanmoqda")
            const data = await login(phoneNumber, password);
            toast.dismiss()
            toast.success("Kirish muvaffaqiyatli yakunlandi!")
            return router.push("/")
        }catch (err) {
            toast.dismiss()
            toast.error("Iltimos login va parolni tekshirib qayta urining!")
        }

    }
    return <div className={"h-full grid place-items-center"}>
        <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit} className={"grid gap-4 max-w-[320px] w-full"}>
            {(({isSubmitting, errors, touched, handleSubmit, handleBlur, handleChange}) => {
                return <Form className={"grid gap-3 max-w-[300px] w-full"} onSubmit={handleSubmit}>
                    <div className={"grid gap-2"}>
                        <InputMask mask={"99 999-99-99"} disabled={isSubmitting} className={"py-2"} name={"phoneNumber"} onChange={handleChange} onBlur={handleBlur}/>
                         <p data-open={Boolean(errors.phoneNumber)} className={"scale-0 text-base text-red-500 data-[open=true]:scale-100 transition-all"}>{errors.phoneNumber}</p>
                    </div>
                    <div className="grid gap-2">
                        <PasswordInput isSubmitting={isSubmitting} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
                    </div>
                    <Button type={"submit"} rounded
                            disabled={isSubmitting}
                            className={'max-w-[170px] mx-auto w-full flex justify-center gap-2 !py-2'}>{isSubmitting && <CgSpinner
                        className={"spin"} size={30}/>} Kirish</Button>
                </Form>
            })}
        </Formik>
    </div>
}

export default Page