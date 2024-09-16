import PrimaryLayout from "@/components/primaryLayout";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {BASE_URL} from "@/utils/utils";
import {bookI} from "@/utils/types";
import AllBooks from "@/components/book/allBooks";
import cookie from "cookie"



type Repo = bookI[]

export const getServerSideProps = (async (context) => {
  const cookies = cookie.parse(context.req.headers.cookie || "")
  const res = await fetch(BASE_URL + "/books/getAll",{
    method:"GET",
    headers: {
      'Content-Type': 'application/json',
      "authorization": cookies.accessToken
    },
  })
  const books: Repo = await res.json()
  return { props: { books } }
}) satisfies GetServerSideProps<{ books: Repo }>

function Page({books}: InferGetServerSidePropsType<typeof getServerSideProps>){
  return <PrimaryLayout>
    <div className={"pt-5 px-5 container mx-auto"}>
      <AllBooks books={books}/>
    </div>
  </PrimaryLayout>
}

export default Page