function RestartButton({ restartGame }) {

    return (
        <button
            className="restart"
            onClick={restartGame}
        >
            Restart Game
        </button>
    );

}

export default RestartButton;