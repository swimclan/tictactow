import { useState } from "react";
import { WINNERS } from "./constants";
import {
  GameBoard,
  GameContainer,
  GameHeader,
  GameSubHead,
  BoardCell,
  CellButton,
} from "./components";

const getCharValFromBoardVal = (boardVal: TypeBoardValue) => {
  switch (boardVal) {
    case 0:
      return 0x25ef;
    case 1:
      return 0x2715;
    case null:
      return 0x2022;
  }
};

const checkWinner = (board: TypeBoard, val: TypeBoardValue): number | null => {
  let isWinner = null;
  for (const winnerIndex in WINNERS) {
    const winner = WINNERS[winnerIndex];
    let count = 0;
    winner.forEach((row, i) =>
      row.forEach((col, j) => {
        if (board[i][j] === val && col) {
          count++;
        }
      })
    );
    if (count === 3) {
      isWinner = winnerIndex;
      break;
    }
  }
  return isWinner ? Number(isWinner) : null;
};

export const App = () => {
  const [player, setPlayer] = useState<TypePlayer>(1);
  const [winner, setWinner] = useState<TypePlayer | null>(null);
  const [winningBoardIndex, setWinningBoardIndex] = useState<number | null>(
    null
  );
  const [board, setBoard] = useState<TypeBoard<null>>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleClick =
    (col: number, row: number) => (e: React.SyntheticEvent) => {
      const newState = [...board];
      if (board[row][col] === null) {
        const boardVal = player === 1 ? 1 : 0;
        newState[row][col] = boardVal;
        setBoard(newState);
        const winnerIndex = checkWinner(board, boardVal);
        winnerIndex === null && setPlayer(player === 1 ? 2 : 1);
        winnerIndex !== null && setWinner(player);
        winnerIndex !== null && setWinningBoardIndex(winnerIndex);
      }
    };

  return (
    <GameContainer>
      <GameHeader>Welcome to Tic-Tac-Toe!</GameHeader>
      {!winner && <GameSubHead>Player: {player}</GameSubHead>}
      {winner && <GameSubHead>Player {player} WINS!!!</GameSubHead>}
      <GameBoard>
        {board.map((row, i) =>
          row.map((cell, j) => (
            <BoardCell key={`${i}-${j}`}>
              <CellButton
                onClick={handleClick(j, i)}
                $highlight={
                  winningBoardIndex !== null
                    ? (WINNERS[winningBoardIndex][i][j] as boolean)
                    : false
                }
              >
                {String.fromCharCode(getCharValFromBoardVal(cell))}
              </CellButton>
            </BoardCell>
          ))
        )}
      </GameBoard>
    </GameContainer>
  );
};
