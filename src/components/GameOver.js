import '../styles/GameOver.css'

export function GameOver({retry}){
    return(
        <div>
             <h1>GameOver</h1>
            <button onClick={retry}>Reiniciar</button>
        </div>
    )
}