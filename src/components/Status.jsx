function Status({ winner, draw, isXTurn }) {

    if (winner) {
        return (
            <h2 className="winner-text">
                🏆 {winner} Wins!
            </h2>
        );
    }

    if (draw) {
        return (
            <h2 className="draw-text">
                🤝 It's a Draw!
            </h2>
        );
    }

    return (
        <h2 className="turn-text">
            🎯 Current Turn : {isXTurn ? "X" : "O"}
        </h2>
    );
}

export default Status;