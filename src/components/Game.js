import '../styles/Game.css'

export function Game({ verifyLetter }) {
    return (
        <div className='game'>
            <p className='points'>
                <span>Pontuação: 000</span>
            </p>
            <h1>Advinhe a Palavra</h1>
            <h3 className='tipo'>
                Dica Sobre a Palavra: <span>Dica...</span>
            </h3>

            <div className='wordContainer'>
                <span className='letter'>A</span>
                <span className='blankSquare'></span>
            </div>

            <div className='letterContainer'>
                <p>Tente Advinhar uma letra:</p>
                <form>
                    <input type='text' name='letter' maxLength='1' required/>
                    <button>Jogar!</button>
                </form>
            </div>

            <div className='wrongLattersContainer'>
                <p>Letras Já Utilizadas</p>
                <span>a,</span>
                <span>f,</span>
                <span>h,</span>

            </div>

        </div>
    )
}