import { useState, useRef } from 'react'
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

    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)


    function handleSubmit(e){
        e.preventDefault();

        verifyLetter(letter);

        setLetter('');

        letterInputRef.current.focus();
    }



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
                <form onSubmit={handleSubmit}>
                    <input type='text'
                        name='letter'
                        maxLength='1'
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter} //para deixar o input dinamico
                        ref={letterInputRef}
                    />
                    <button>Jogar!</button>
                </form>
            </div>

            <div className='wrongLattersContainer'>
                <p>Letras Já Utilizadas</p>
                {wrongLetters.map((letter, index) => (
                    <span key={index}>{letter}, </span>
                ))}

            </div>

        </div>
    )
}