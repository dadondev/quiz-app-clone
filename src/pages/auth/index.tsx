"use client"
import {InputMask} from "primereact/inputmask";
import {Button} from "primereact/button";
import PasswordInput from "@/components/password/input";
import {CgSpinner} from "react-icons/cg";
import {Form, Formik} from "formik";
import {loginSchema} from "@/utils/schemas";
import toast from "react-hot-toast";
import {registerDataI} from "@/utils/types";
import Cookies from "js-cookie";
import { BASE_URL } from "@/utils/utils"
import {useRouter} from "nextjs-toploader/app";

const initialValues = {
    password: "",
    phoneNumber:""
}

async function login(phoneNumber:string, password:string){
    const resp = await fetch(`${BASE_URL}/auth/login`, {
        headers:{
            "Content-Type": "application/json",
        },
        method:"POST",
        body:JSON.stringify({phoneNumber,password}),
        cache:"no-cache"
    })
    const data:registerDataI = await resp.json();
    if(resp.status === 200){
        const today = new Date()
        today.setTime(today.getTime() + (12 * 60 * 60 * 1000));
        Cookies.set("accessToken", data.tokens.accessToken, {expires:today, secure:true})
        Cookies.set("refreshToken", data.tokens.refreshToken, {expires:30, secure:true})
        return data.user
    }
    throw new Error("Admin not found")
}


function Page(){
    const router = useRouter()
    const handleSubmit = async (e= initialValues) => {
        let phoneNumber = e.phoneNumber
        const password = e.password
        phoneNumber = phoneNumber.replaceAll(" ", "")
        phoneNumber ="+998" + phoneNumber.replaceAll("-", "")
        const fetchedData = login(phoneNumber, password);
        try{
            await toast.promise(fetchedData, {
                loading:"Malumotlaringiz tekshirilmoqda...",
                error:"Iltimos login va parolingizni tekshiring!",
                success:"Kirish muvaffaqiyatli tarzda yakunlandi. Iltimos kutib turing!"
            })
            return router.push("/")
        }catch (err) {
            console.log(err)
        }
    }
    return <div className={"h-full grid place-items-center"}>
        <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit} className={"grid gap-4 max-w-[320px]"}>
            {(({isSubmitting, errors, touched, handleSubmit, handleBlur, handleChange}) => {
                return <Form onSubmit={handleSubmit}>
                    <div className={"grid gap-2 sm:w-[320px] w-full"}>
                        <InputMask mask={"99 999-99-99"} disabled={isSubmitting} className={"py-2"} name={"phoneNumber"} onChange={handleChange} onBlur={handleBlur}/>
                         <p data-open={Boolean(errors.phoneNumber)} className={"scale-0 text-base text-red-500 data-[open=true]:scale-100 transition-all"}>{errors.phoneNumber}</p>
                    </div>
                    <div className="grid gap-2 sm:w-[320px w-full">
                        <PasswordInput isSubmitting={isSubmitting} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
                    </div>
                    <Button type={"submit"} rounded
                            disabled={isSubmitting}
                            className={'mt-3 mx-auto min-w-full flex justify-center gap-2 !py-2'}>{isSubmitting && <CgSpinner
                        className={"spin"} size={30}/>} Kirish</Button>
                </Form>
            })}
        </Formik>
    </div>
}

export default Page