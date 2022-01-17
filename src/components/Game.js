import {useState, useEffect, useMemo, useCallback} from "react";
import GameField from "./GameField";
import NewWord from "./NewWord";
import Score from "./Score";

export default function Game() {
    const [word, setWord] = useState('MAKE A WORD')
    const [wordcount, setWordcount] = useState(0)
    const [active, setActive] = useState([])
    const [reshuffle,setReshuffle] = useState(false)
    const [letterArray, setLetterarray] = useState(['c', 'a', 'q', 'k', 'l', 'b', 'r', 'i', 'e', 's', 'p', 'n'])
    const [correctlyGuessed, setCorrectlyguessed] = useState([])
    const [winStatus, setWinstatus] = useState(false)
   
    
    const wordlistarray = useMemo(() =>
        [
            ['apt', 'gat', 'tag','cat','cap','pat','pack','pact','sac','sack','atlas','clan','clans','class','slack','gal','gap','gasp','gasps','glass', 'lag','lap', 'pass', 'ask', 'plank','plant','slang', 'snag', 'plants', 'ant', 'ants','tack','tacks','task', 'tasks', 'fact','facts','fan','fans','fat','flag','flags','flap','flaps','flat','flats','flank','flanks','flask', 'flasks', 'last','nag','nap','scant','snap','snaps','slap','slaps','tank','talk','talks', 'tanks', 'plank', 'sank', 'slap','spat','stamp','stamps', 'as', 'at', 'alt', 'gas', 'mask', 'masks', 'sap', 'satan', 'act', 'salt', 'pal', 'pals', 'spa', 'past', 'cans', 'pans', 'can', 'pan', 'pant', 'pants', 'cast', 'slant', 'sat', 'plan', 'plans', 'tan', 'tap'],
            ['clock','clocks','close','cook', 'cooks','cool','cools','look','looks','belie','belies','block','blocks','bore','sock','chock','chocks', 'book', 'boo', 'lob','lobs','loo','loop','loops','loose','lock','locks','lose', 'rookie', 'lie','lies', 'bike', 'bikes', 'like', 'bloke','blokes', 'spook', 'spooker', 'pies', 'pie', 'spike', 'cries','crooks', 'crook','rebook','reblock','recook','relies','replies','relock','rib','ribs', 'rice','rip','ripe','rips','rob','robs','rock','rocks','rookies','sob','sole','solo','sip'],
            ['bee','beer','beet','bet','he','her','herb','herbs','here','heir','hers','his','she','sheer','tee','tees','the','there','these','their','three','tree','trees','request','reset','regress','regret','retest','reuse','guest','guess','queer','quiet','quit','quest','gust','best','bust','burst','rust','see','sent','set','steer','bet','sue','brute','but','rue','rent','rest','test','trust','thrust','thug','hug','hurl','hurt','hurtle','hut','huts','thigh','high','height']
    ],[])

    const shuffle = arr => {
        setReshuffle(false)
        return arr.sort(()=> Math.random() - 0.5)
    }
    
    const handleSubmit = evt => {
        const suggested = word.toLowerCase()
        const acceptablewords = (wordlistarray[0].concat(wordlistarray[1])).concat(wordlistarray[2])
        //
        evt.preventDefault()
        //check if suggested word has already been added to the list
        
        if (correctlyGuessed.includes(suggested.toUpperCase())) {
            console.log("Word already guessed!")
        }
        else if (acceptablewords.includes(suggested)) {
            setCorrectlyguessed(correctlyGuessed => [...correctlyGuessed, word])
            setWordcount(wordcount + 1)
        }
        else {
            console.log(suggested + " is not on the list!")
        }
        // Clear Display
        cancelWord()
        // Clear active letters array to remove highlighting
        setActive(active => [active, -1])
        console.log("shuffle status: " + reshuffle)
    }

    const handleClicks = (id,char) => {
        const letter = char
    
        const letterid = id
        if (word === "MAKE A WORD") {
            setWord(letter.toUpperCase())
        }
        else if (active.includes(letterid)) {
            console.log("This letter is already active!")
        }
        else {
            setWord(word + letter.toUpperCase())
        }
        //Add the clicked letter to list of active letters, only needed for highlighting the cell using css
        setActive(active => [...active, parseInt(letterid)])
    }

    const handleShuffles = evt => {
        evt.preventDefault()
        setReshuffle(true)
        //setActive(active => [active, -1])
        generateLetters(wordlistarray)
    }

    const backSpace = evt => {
        const truncated_word = word
        evt.preventDefault()
        setWord(truncated_word.slice(0,truncated_word.length-1))
    }

    const cancelWord = () => {
        setWord("")
    }

    const generateLetters = useCallback(wlarray => {
        const list = wlarray.map(words => (words.map(word => (word))))
        let lettersobj = []
        let indx = 0
        //let cnt = 0
        for (const set of list) {
            //console.log("set: " + set)
            for (const term of set) {
                //console.log("term: " +term)
                let obj = {}
                for (let letter of term) {        
                    if (!obj[letter]) {
                        obj[letter] = 1 
                    }
                    else {
                        obj[letter] = obj[letter] + 1
                    }
                    obj[indx] = indx
                    // eslint-disable-next-line no-unused-expressions
                    indx === 2 ? lettersobj.push([letter, obj[letter],obj[indx]]) : null
                    //lettersobj.push([letter, obj[letter], obj[indx]]);
                }
               // cnt+=1
                //console.log('lettersobj ' + lettersobj)
                //console.log(`lettersobj set # ${indx} `)
            }
            indx+=1
        }
        // sort the letters from most to least occurrence
        lettersobj.sort((a, b) => b[1] - a[1])
        let uniqueletters = getUniqueArray(lettersobj)
        let gameletterarray = []
        for (let letterentry of uniqueletters) {
            for (let letter of letterentry) {
                if (letter[0] === undefined || letter[0] === " ") {
                    console.log("undefined!")
                }
                else {
                     gameletterarray.push(letter[0])
                }
               
            }
        }
        setLetterarray(gameletterarray.slice(0, 8))
       // console.log(`gameArray is ${gameArray}`)
    },[])

    const getUniqueArray = _array => {
    let obj = {};
    let uniqueArray = [];
    for (var i = 0; i < _array.length; i++) {
        if (obj[_array[i]] === undefined)
        // add the array elements to object , where the element is key and the same element is value
        // keys of the object can only have unique values
        {   
          obj[_array[i]] = i;
        // add the keys of the object to a new array as elements of the array
          uniqueArray.push(_array[i]);
        }
    }
    return uniqueArray; 
    }

    const gameEnd = () => {
              // eslint-disable-next-line no-unused-expressions
            wordcount === 10 ? setWinstatus(true) : null
    }
    
    useEffect(() => {
        shuffle(letterArray)
    },[letterArray])

    useEffect(() => {
       gameEnd() 
    })

    return (
        <div className="mx-auto grid grid-cols-1">
            <Score count={wordcount}/>
            <NewWord word={word} />
            <GameField
                shuffles={handleShuffles}
                submit={handleSubmit}
                backtrack={backSpace}
                letters={letterArray.slice(0,8)}
                clicks={handleClicks}
                active={active}
                winStatus={winStatus}
                wordcount={wordcount}    
            />      
        </div>
    )
}

