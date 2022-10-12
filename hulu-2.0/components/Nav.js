import { useRouter } from "next/router"
import request from "../utils/request"


const Nav = () => {
    const router = useRouter();
    return (
        <nav className="relative">
            <div className="flex lg:justify-around font-bold lg:overflow-visible overflow-x-scroll overflow-y-hidden scrollbar-hide space-x-5 my-6 px-4">
                {Object.entries(request).map(([key, { title, url }], i) => <h2 key={i} className="hover:scale-125 cursor-pointer hover:text-white last:z-50" onClick={() => router.push(`/?genre=${key}`)}>{title}</h2>)}
            </div>
            <div className="lg:hidden sm:visible absolute right-0 top-0 w-1/12 h-full bg-gradient-to-l from-[#06202A]"></div>
        </nav>
    )
}

export default Nav
