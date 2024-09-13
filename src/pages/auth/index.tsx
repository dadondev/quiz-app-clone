"use client"
import {InputMask} from "primereact/inputmask";
import {Button} from "primereact/button";
import PasswordInput from "@/components/password/input";
import {CgSpinner} from "react-icons/cg";
import {login} from "@/pages/action";
import {useRouter} from "next/navigation";
import {Form, Formik} from "formik";
import {loginSchema} from "@/utils/schemas";

const initialValues = {
    password: "",
    phoneNumber:""
}


function Page(){
    const router = useRouter()
    const handleSubmit = async (e= initialValues) => {
        let phoneNumber = e.phoneNumber
        const password = e.password
        phoneNumber = phoneNumber.replaceAll(" ", "")
        phoneNumber ="+998" + phoneNumber.replaceAll("-", "")
        await login(phoneNumber, password)
        router.push("/")
    }
    return <div className={"h-full grid place-items-center"}>
        <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit} className={"grid gap-4 max-w-[320px] w-full"}>
            {(({isSubmitting, errors, touched, handleSubmit, handleBlur, handleChange}) => {
                return <Form className={"grid gap-3 max-w-[300px] w-full"} onSubmit={handleSubmit}>
                    <div className={"grid gap-2"}>
                        <InputMask mask={"99 999-99-99"} className={"py-2"} name={"phoneNumber"} onChange={handleChange} onBlur={handleBlur}/>
                         <p data-open={errors.password && touched.password} className={"scale-0 text-base text-red-500 data-[open=true]:scale-100 transition-all"}>{errors.phoneNumber}</p>
                    </div>
                    <div className="grid gap-2">
                        <PasswordInput errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
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