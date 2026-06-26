function RestartButton({ restartGame }) {

    return (

        <button
            className="restart"
            onClick={restartGame}
        >
            🔄 Play Again
        </button>

    );

}

export default RestartButton;