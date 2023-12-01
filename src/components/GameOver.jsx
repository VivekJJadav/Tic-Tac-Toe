const GameOver = ({winnerPlayer, onRestart}) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winnerPlayer && <p>{winnerPlayer} won!</p>}
            {!winnerPlayer && <p>It's a Draw!</p>}
            <p><button onClick={onRestart}>Rematch!</button></p>
        </div>
    )
}

export default GameOver;