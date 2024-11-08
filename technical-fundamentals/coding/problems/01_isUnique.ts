// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  const hash: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!hash[char]) {
      hash[char] = 0;
    }

    hash[char]++;
  }

  return Object.values(hash).filter((v) => v !== 1).length === 0;
}
