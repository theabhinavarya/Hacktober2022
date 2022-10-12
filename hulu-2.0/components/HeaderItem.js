const HeaderItem = ({ Icon, title }) => {
    return (
        <div className="group flex flex-col items-center cursor-pointer">
            <Icon className="lg:w-[2rem] lg:group-hover:animate-bounce w-[1.5rem] " />
            <p className="lg:opacity-0 lg:block group-hover:opacity-100 text-[1rem] hidden">{title}</p>
        </div>
    )
}

export default HeaderItem
