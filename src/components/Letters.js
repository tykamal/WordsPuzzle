function Letters({charid, letter, click, active}) {
    return (
        <div
            className={`w-17 h-17 border m-0 cursor-pointer text-4xl font-bold capitalize text-center pt-2 ${active.includes(charid) ? "bg-gray-300":"bg-white" } `}
            onClick={() => click(charid,letter)}
            id={charid}
        >
            {letter}
        </div>
    )
}
export default Letters