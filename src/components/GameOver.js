import '../styles/GameOver.css'

export function GameOver({retry, score}){
    return(
        <div className='over'>
             <h2>Fim de Jogo</h2>
             <p>A sua pontuação foi: {score}</p>
            <button onClick={retry}>Reiniciar</button>
        </div>
    )
}