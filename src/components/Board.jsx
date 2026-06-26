import { useState, useEffect } from "react";
import Confetti from "react-confetti";

import Cell from "./Cell";
import Status from "./Status";
import RestartButton from "./RestartButton";

function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [draw, setDraw] = useState(false);
    const [winningCells, setWinningCells] = useState([]);

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleClick(index) {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";

        setBoard(newBoard);
        setIsXTurn(!isXTurn);
    }

    useEffect(() => {
        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;

            if (
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                setWinner(board[a]);
                setWinningCells(pattern);
                return;
            }
        }

        if (!board.includes(null)) {
            setDraw(true);
        }
    }, [board]);

    function restartGame() {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setDraw(false);
        setWinningCells([]);
        setIsXTurn(true);
    }

    return (
        <div>

            {winner && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={350}
                />
            )}

            <Status
                winner={winner}
                draw={draw}
                isXTurn={isXTurn}
            />

            <div className="board">
                {board.map((value, index) => (
                    <Cell
                        key={index}
                        value={value}
                        onClick={() => handleClick(index)}
                        isWinner={winningCells.includes(index)}
                    />
                ))}
            </div>

            <RestartButton restartGame={restartGame} />

        </div>
    );
}

export default Board;