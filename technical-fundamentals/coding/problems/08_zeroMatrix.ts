// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 0, 9],
];
const expected = [
  [1, 0, 3],
  [4, 0, 6],
  [0, 0, 0],
];
export default function zeroMatrix(matrix: Matrix) {
  const points: Matrix = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        points.push([row, col]);
      }
    }
  }

  points.forEach((point) => {
    const x = point[0];
    const y = point[1];

    matrix[x] = Array(matrix.length).fill(0);

    matrix.forEach((row) => {
      row[y] = 0;
    });
  });

  return matrix;
}
