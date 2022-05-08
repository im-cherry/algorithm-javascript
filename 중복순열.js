function getPermutation(arr, num) {
  const results = [];

  if (num === 1) return arr.map((value) => [value]);

  arr.forEach((value, index, array) => {
    const permutations = getPermutation(array, num - 1);
    const attached = permutations.map((permutation) => [value, ...permutation]);

    results.push(...attached);
  });

  return results;
}

const list = ["a", "b", "c"];
const pick = 2;
const result = getPermutation(list, pick);
console.log(result);
