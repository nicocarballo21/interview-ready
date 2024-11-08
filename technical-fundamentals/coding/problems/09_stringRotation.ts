// 9. *String Rotation*;

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, si and s2, write code to check if s2 is a rotation of 1i using only one call to isSubstring
// [e.g., "waterbottle" is a rotation oP'erbottlewat")

function isSubstring(s1: string, s2: string): boolean {
  return s1.includes(s2);
}

export default function stringRotation(s1: string, s2: string): boolean {
  let response = s2;

  for (let i = 0; i < s1.length; i++) {
    if (s1 === response) return true;
    response = response.slice(1, response.length) + response[0];
  }

  return false;
}
