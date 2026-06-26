import { useState } from "react";
import Confetti from "react-confetti";
import toast from "react-hot-toast";

import Cell from "./Cell";
import Status from "./Status";
import RestartButton from "./RestartButton";

function Board() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const [winner, setWinner] = useState(null);
    const [draw, setDraw] = useState(false);

    const [winningCells, setWinningCells] = useState([]);

    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
    const [drawScore, setDrawScore] = useState(0);

    const winningPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];

    function checkWinner(newBoard){

        for(let pattern of winningPatterns){

            const [a,b,c]=pattern;

            if(
                newBoard[a] &&
                newBoard[a]===newBoard[b] &&
                newBoard[a]===newBoard[c]
            ){

                return{

                    winner:newBoard[a],
                    cells:pattern

                }

            }

        }

        return null;

    }

    function handleClick(index){

        if(board[index] || winner) return;

        const newBoard=[...board];

        newBoard[index]=isXTurn ? "X":"O";

        const result=checkWinner(newBoard);

        if(result){

            setBoard(newBoard);

            setWinner(result.winner);

            setWinningCells(result.cells);

            if(result.winner==="X"){

                setXScore(prev=>prev+1);

            }else{

                setOScore(prev=>prev+1);

            }

            toast.success(`🎉 ${result.winner} Wins!`);

            return;

        }

        if(!newBoard.includes(null)){

            setBoard(newBoard);

            setDraw(true);

            setDrawScore(prev=>prev+1);

            toast("🤝 Match Draw");

            return;

        }

        setBoard(newBoard);

        setIsXTurn(!isXTurn);

    }

    function restartGame(){

        setBoard(Array(9).fill(null));

        setWinner(null);

        setDraw(false);

        setWinningCells([]);

        setIsXTurn(true);

    }

    return(

        <>

        {winner && (

            <Confetti

                width={window.innerWidth}
                height={window.innerHeight}

                recycle={false}

                numberOfPieces={350}

            />

        )}

        <div className="scoreBoard">

            <div className="scoreCard">

                ❌

                <h2>{xScore}</h2>

            </div>

            <div className="scoreCard">

                🤝

                <h2>{drawScore}</h2>

            </div>

            <div className="scoreCard">

                ⭕

                <h2>{oScore}</h2>

            </div>

        </div>

        <Status

            winner={winner}

            draw={draw}

            isXTurn={isXTurn}

        />

        <div className="board">

            {

                board.map((value,index)=>(

                    <Cell

                        key={index}

                        value={value}

                        onClick={()=>handleClick(index)}

                        isWinner={winningCells.includes(index)}

                    />

                ))

            }

        </div>

        <RestartButton

            restartGame={restartGame}

        />

        </>

    );

}

export default Board;