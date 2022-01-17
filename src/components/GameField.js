import Letters from "./Letters"
import Gamewon from "./Gamewon"
import Buttons from "./Buttons"

function GameField({shuffles, submit, backtrack, letters, clicks, active, winStatus, wordcount}) {
    return (
        <div className="relative">
            {winStatus === true ? <Gamewon score={wordcount} /> : null}
            <div className="box-border w-3/4 pt-2 pb-2 pl-0 pr-0 mt-0 mb-0 mx-auto border-2 grid grid-cols-4 gap-0">
                {
                    letters.map((char, index) => (
                        <Letters key={index} charid={index} letter={char} click={clicks} active={active}/>
                    ))
                }
                
            </div>
            <Buttons shuffles={shuffles} submit={submit} backtrack={backtrack} />
        </div>
    )
}

export default GameField



