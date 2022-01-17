function NewWord(props) {
    return (
        <div
            className="box-border border-l-2 border-r-2 border-t-2 mx-auto mb-0 h-16 w-3/4 mt-2 border-b-0 rounded-t-md"
        >
            <input type="text"
                className="flex w-full mt-0 mb-2 p-5 text-center font-semibold text-2xl bg-gray-200"
                value={props.word}
                onChange={() => null}
            />
        </div>
    )
}
export default NewWord