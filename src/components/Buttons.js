export default function Buttons({ shuffles, submit, backtrack }) {
    return (
        <div className="grid grid-cols-3 gap-0 mx-auto w-3/4 border-2">
            <div className= "mx-auto border-1">
                    <button
                        type="submit"
                        className="text-2xl font-extrabold p-5"
                        onClick={shuffles}
                    ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg></button>
                </div>
                <div className="mx-auto border-1">
                    <button type="submit"
                        className="text-2xl font-extrabold pt-2 pb-1 pl-2 pr-2"
                        onClick={submit}
                    >Submit</button>
                </div>
                <div className="mx-auto border-1">
                    <button type="submit"
                        className="text-2xl font-extrabold p-5 mt-0"
                        onClick={backtrack}
                ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
</svg></button>
                
                </div>
            </div>
    ) 
}