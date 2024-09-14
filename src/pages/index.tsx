import PrimaryLayout from "@/components/primaryLayout";
import Book from "@/components/book/book";

function Page(){
  return <PrimaryLayout>
    <div className={"pt-5 px-5 container mx-auto flex justify-center flex-wrap gap-10"}>
      <Book/>
    </div>
  </PrimaryLayout>
}

export default Page