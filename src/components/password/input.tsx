import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {ChangeEvent, useState} from "react";
import {EyeSlashIcon} from "primereact/icons/eyeslash";
import {EyeIcon} from "primereact/icons/eye";
import {FormikErrors, FormikTouched} from "formik";
import * as React from "react";

function PasswordInput ({errors, touched, handleBlur, handleChange, isSubmitting}:{errors:FormikErrors<{password:string}>, touched:FormikTouched<{password: string}>, handleChange:handleChange, handleBlur:handleBlur, isSubmitting:boolean}){
    const [type,setType] = useState<"text"|"password">("password");
    function handleTypeChange(){
        if(type === "password") {
            setType("text");
            return
        }
        setType("password");
        return;
    }
    return <>
        <div className={"p-inputgroup grid grid-cols-[1fr_auto] gap-2"} >
            <InputText placeholder="Parol" type={type} disabled={isSubmitting} name={"password"} className={"py-2"} onChange={handleChange} onBlur={handleBlur}/>
            <Button onClick={handleTypeChange} className={"!p-2 !px-3"} type={"button"}>
                {type === "password" ? <EyeIcon/> : <EyeSlashIcon/>}
            </Button>
        </div>
        <p data-open={Boolean(errors.password)}
           className={"scale-0 text-base text-red-500 data-[open=true]:scale-100 transition-all"}>{errors.password}</p>
    </>
}

export default PasswordInput

type handleChange =  (
    eventOrPath: string | React.ChangeEvent<HTMLInputElement>
) => void | ((eventOrTextValue: string | React.ChangeEvent<string>) => void);


 type handleBlur = (eventOrString: string |ChangeEvent<HTMLInputElement>) => void;