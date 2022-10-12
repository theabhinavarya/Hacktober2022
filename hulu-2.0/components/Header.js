import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

const Header = () => {
    return (
        <header className="flex justify-between items-center flex-col xl:flex-row px-4">
            <div className="flex lg:space-x-4 space-x-4">
                <HeaderItem title={"HOME"} Icon={HomeIcon} />
                <HeaderItem title={"TRENDING"} Icon={LightningBoltIcon} />
                <HeaderItem title={"VERIFIED"} Icon={BadgeCheckIcon} />
                <HeaderItem title={"COLLECTIONS"} Icon={CollectionIcon} />
                <HeaderItem title={"SEARCH"} Icon={SearchIcon} />
                <HeaderItem title={"ACCOUNT"} Icon={UserIcon} />
            </div>
            <img src="/hulu-logo-removebg-preview.png" width={200} height={100} />
        </header>
    )
}

export default Header
