// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  const hash: Record<string, number> = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];

    if (!hash[char]) {
      hash[char] = 0;
    }
    hash[char]++;
  }

  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];

    if (!hash[char]) return false;

    hash[char]--;
  }

  return Object.values(hash).filter((v) => v > 0).length === 0;
}
