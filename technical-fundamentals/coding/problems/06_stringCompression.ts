// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  let count = 0;
  let pointer = str[0];
  let response = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === pointer) {
      count++;
    } else {
      response += pointer + count;
      pointer = str[i];
      count = 1;
    }
  }

  response += pointer + count;

  return response.length < str.length ? response : str;
}
