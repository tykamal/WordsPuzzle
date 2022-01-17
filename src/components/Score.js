function Score({count}) {
    return (
        <div className="mx-auto box-border text-center  align-middle h-16 w-16 p-2 border-gray-900 border-4 m-2 rounded-full bg-blue-600" >
            <p className=" text-white font-extrabold">{count}/10</p>
        </div>
    )
}
export default Score