
const textes = {
    free:"Bo'sh",
    borrowed:"Band",
    missing:"Yoqotilgan"
}

function BookBadge({type}:bookBadgeI) {
    return <div data-type={type} className={"px-2 py-1 text-sm data-[type=free]:bg-white data-[type=borrowed]:text-white data-[type=borrowed]:bg-blue-600"}><span>{textes[type]}</span></div>
}

export default BookBadge

interface bookBadgeI  {
    type:"borrowed"|"free" |"missing"
}