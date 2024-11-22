// Each sub-grid can only have digits from 1-9, and digits cannot be
// repeated
// Interactions The user should be able to put a number 1-9 as long as it
// does not violate rule #2 The use should be able to clear the board

// draw board 9x9 with 3x3 subgrids
// every tile is a input
// on input change we have to:
// - check if number is between 1 - 9
// - check if its not zero
// - check that is not on the row
// - check that is not on the col
// - check that is not on the subgrid
// set the number based on validation

import { useState } from "react";

const exampleBoard = [
  [7, 8, 0, 4, 0, 0, 1, 2, 0],
  [6, 0, 0, 0, 7, 5, 0, 0, 9],
  [0, 0, 0, 6, 0, 1, 0, 7, 8],
  [0, 0, 7, 0, 4, 0, 2, 6, 0],
  [0, 0, 1, 0, 5, 0, 9, 3, 0],
  [9, 0, 4, 0, 6, 0, 0, 0, 5],
  [0, 7, 0, 3, 0, 0, 0, 1, 2],
  [1, 2, 0, 0, 0, 7, 4, 0, 0],
  [0, 4, 9, 2, 0, 6, 0, 0, 7],
];

function initializeBoard(board) {
  const newBoard = Array.from({ length: 9 }).map(() =>
    Array.from({ length: 9 }).fill(0)
  );

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const value = board[y][x];

      newBoard[y][x] = {
        value,
        state: value > 0 ? "default" : "empty",
      };
    }
  }

  return newBoard;
}

function isValidMove(board, position, newValue) {
  const { x, y } = position;
  // check if already in row
  for (let i = 0; i < board.length; i++) {
    if (board[position.y][i].value === newValue) return false;
  }

  // check if already in col
  for (let i = 0; i < board.length; i++) {
    if (board[i][position.x].value === newValue) return false;
  }

  const startX = x - (x % 3);
  const startY = y - (y % 3);

  for (let y = startY; y < startY + 3; y++) {
    for (let x = startX; x < startX + 3; x++) {
      if (board[y][x].value === newValue) return false;
    }
  }

  return true;
}

function checkWin(board) {
  return board.every((row) =>
    row.every((cell) => cell.state === "default" || cell.state === "valid")
  );
}

export default function Sudoku() {
  const [board, setBoard] = useState(initializeBoard(exampleBoard));
  const [moveNotValid, setMoveNotValid] = useState(false);
  const [boardCompleted, setBoardCompleted] = useState(false);

  function handleInputChange(e, position) {
    if (boardCompleted) return;

    const { x, y } = position;
    setMoveNotValid(false);

    const newValue = parseInt(e.target.value);
    const clone = structuredClone(board);

    if (!newValue) {
      clone[y][x] = { value: 0 };
      setBoard(clone);
      return;
    }

    const isValid = isValidMove(board, position, newValue);

    if (!isValid) {
      setMoveNotValid(true);
    }

    clone[y][x] = { value: newValue, state: isValid ? "valid" : "invalid" };

    setBoard(clone);

    const win = checkWin(clone);

    if (isValid && win) {
      setBoardCompleted(true);
    }
  }

  function resetBoard() {
    setBoard(initializeBoard(exampleBoard));
    setMoveNotValid(false);
    setBoardCompleted(false);
  }

  return (
    <>
      <h1>Sudoku</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button onClick={resetBoard}>Reset Board</button>
        <div
          style={{
            background: "lightGray",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {board.map((row, y) => (
            <div key={y} style={{ display: "flex" }}>
              {row.map((cell, x) => (
                <input
                  key={`${y}-${x}`}
                  value={cell.value || ""}
                  maxLength={1}
                  disabled={cell.state === "default"}
                  onChange={(e) => handleInputChange(e, { y, x })}
                  style={{
                    width: "35px",
                    height: "35px",
                    textAlign: "center",
                    border: "0.5px solid black",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        {moveNotValid && (
          <span
            style={{
              background: "red",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "20px",
            }}
          >
            Move not valid!
          </span>
        )}
        {boardCompleted && (
          <span
            style={{
              background: "lightGreen",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "20px",
            }}
          >
            You completed the board!
          </span>
        )}
      </div>
    </>
  );
}
