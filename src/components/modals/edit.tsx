import useBooksStore from "@/states/books";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {Button} from "primereact/button";
import {CgSpinner} from "react-icons/cg";
import {FormikConfig,  useFormik} from "formik";
import {bookI, EditFormI} from "@/utils/types";
import {useEffect} from "react";
import {editBookSchema} from "@/utils/schemas";
import toast from "react-hot-toast";
import {editBook} from "@/action";
import useModalStore from "@/states/modal/store";





async function onSubmit(id:string, values:EditFormI){
    const fetchData= editBook(id, values)
    const data = await toast.promise(fetchData, {
        loading:"Tahrirlanmoqda...",
        success:"Muvaffaqiyatli tarzda tahrirlandi!",
        error:"Tahrirlashda muammo bo'ldi. Qayta urinib ko'ring!"
    })
    return data
}


function EditModal(){
    const {close}= useModalStore()
    const { currentBook, updateOne } = useBooksStore((state)=>state)
    const options:FormikConfig<EditFormI> = {
        initialValues:{
            name:"",
            author:"",
            pagesCount:1
        },
        validationSchema:editBookSchema,
        onSubmit:async (values)=>{
            close()
            const data:bookI = await onSubmit(currentBook?.id || "", values)
            updateOne(data.id, values)
        }
    }


    const {handleSubmit, errors, isSubmitting,handleChange, handleBlur, setValues, values} = useFormik(options)

    useEffect(() => {
        if(currentBook){
            const  {name, pagesCount, author} = currentBook
            if(name && pagesCount && author)setValues({name, pagesCount, author})
        }
    }, [currentBook]);



    return <form onSubmit={handleSubmit}>
        <div className={"grid w-full gap-3"}>
            <div className={"grid gap-2"}>
                <label htmlFor="bookName">Kitob nomi</label>
                <InputText value={values.name}
                           disabled={isSubmitting}
                           onChange={handleChange} onBlur={handleBlur}
                           name={"name"}
                           id="bookName" className={"!py-2"}/>
                <p data-open={Boolean(errors.name)}
                   className={"scale-0 text-base text-red-500 data-[open=true]:scale-100 transition-all"}>{errors.name}</p>
            </div>
            <div className={"grid gap-2"}>
                <label htmlFor="author">Muallif</label>
                <InputText disabled={isSubmitting} value={values.author} name={"author"} id="author"
                           onChange={handleChange} onBlur={handleBlur} className={"!py-2"}/>
                <p data-open={Boolean(errors.author)}
                   className={"scale-0 text-base text-red-500 data-[open=true]:scale-100 transition-all"}>{errors.author}</p>
            </div>
            <div className={"grid gap-2"}>
                <label htmlFor="pagesCount">Betlar soni</label>
                <InputNumber disabled={isSubmitting} useGrouping={false} value={values.pagesCount} name={"pagesCount"}
                             onChange={(event) => handleChange({
                                 ...event,
                                 target: {value: event.value, name: "pagesCount", id: "pagesCount"}
                             })} onBlur={handleBlur} id="pagesCount"
                             className={"[&>input]:!py-2 block sm:[&>input]:w-full"}/>
                <p data-open={Boolean(errors.pagesCount)}
                   className={"scale-0 text-base text-red-500 data-[open=true]:scale-100 transition-all"}>{errors.pagesCount}</p>
            </div>
            <Button type={"submit"} rounded
                    disabled={isSubmitting}
                    className={'mt-3 mx-auto max-w-[170px] w-full flex justify-center gap-2 !py-2'}>{isSubmitting && <CgSpinner
                className={"spin"} size={30}/>} Tahrirlash</Button>
        </div>
    </form>
}

export default EditModal;