// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  if (str1 === str2) return true;
  // Remove
  if (str1.length < str2.length) return true;
  // insert
  if (str1.length > str2.length) return true;

  // edit

  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }

  if (count === 1) return true;

  return false;
}
