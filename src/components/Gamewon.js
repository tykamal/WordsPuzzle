export default function Gamewon(props) {
    return (
            <div className="absolute invisible top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block max-w-xs rounded-lg p-6 ring-gray-900/5 shadow-lg space-y-3" >
                <div className="flex items-center space-x-3 bg-yellow-500">
                  <h3 className="text-gray-900">You won!</h3>
                </div>
                <p className="text-gray-500 group-hover:text-red text-md">Score is {props.score}</p>
                <button className="text-lg font-bold text-red-600">New Game</button>
          </div>
    )
}