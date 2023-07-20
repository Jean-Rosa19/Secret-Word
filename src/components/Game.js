import '../styles/Game.css'

export function Game({ verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) {
    return (
        <div className='game'>
            <p className='points'>
                <span>Pontuação: {score}</span>
            </p>
            <h1>Advinhe a Palavra</h1>
            <h3 className='tipo'>
                Dica Sobre a Palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s)</p>
            <div className='wordContainer'>
                {letters.map((letter, index) => 
                    guessedLetters.includes(letter) ? (
                        <span key={index} className="letter">{letter}</span>
                    ) : (
                        <span key={index} className="blankSquare"></span>
                    )
                )}
            </div>

            <div className='letterContainer'>
                <p>Tente Advinhar uma letra:</p>
                <form>
                    <input type='text' name='letter' maxLength='1' required />
                    <button>Jogar!</button>
                </form>
            </div>

            <div className='wrongLattersContainer'>
                <p>Letras Já Utilizadas</p>
                        {wrongLetters.map((letter, index)=>(
                            <span key={index}>{letter}, </span>
                        ))}

            </div>

        </div>
    )
}