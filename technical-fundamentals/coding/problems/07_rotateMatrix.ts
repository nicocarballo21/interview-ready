// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

export default function rotateMatrix(matrix: Matrix) {
  // Way creating a new matrix
  //   const newMatrix: Matrix = Array(matrix.length)
  //     .fill(0)
  //     .map(() => Array(matrix.length).fill(0));
  //   for (let row = 0; row < matrix.length; row++) {
  //     for (let col = 0; col < matrix.length; col++) {
  //       const newRow = col;
  //       const newCol = matrix.length - 1 - row;
  //       newMatrix[newRow][newCol] = matrix[row][col];
  //     }
  //   }
  //   return newMatrix;
  // Way in place

  for (let row = 0; row < matrix.length; row++) {
    for (let col = row + 1; col < matrix.length; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  matrix.forEach((row) => row.reverse());
}
