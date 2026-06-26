function Status({ winner, isXTurn, draw }) {

    if (winner) {
        return <h2>🎉 Winner : {winner}</h2>;
    }

    if (draw) {
        return <h2>🤝 Match Draw</h2>;
    }

    return (
        <h2>
            Current Turn :
            {isXTurn ? " X" : " O"}
        </h2>
    );
}

export default Status;