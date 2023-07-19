import '../styles/Game.css'

export function Game({verifyLetter}){
    return(
        <div>
            <h1>Game</h1>
            <button onClick={verifyLetter}>Finalizar</button>
        </div>
    )
}