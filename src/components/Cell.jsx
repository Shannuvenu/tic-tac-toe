function Cell({ value, onClick, isWinner }) {

    return (
        <button
            className={`cell ${isWinner ? "winner-cell" : ""}`}
            onClick={onClick}
        >
            {value}
        </button>
    );

}

export default Cell;