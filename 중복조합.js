function getCombination(arr, num) {
  const results = [];

  if (num === 1) return arr.map((value) => [value]);

  arr.forEach((value, index, array) => {
    const rest = array.slice(index + 1);
    const combinations = getCombination(rest, num - 1);
    const attached = combinations.map((combination) => [value, ...combination]);

    results.push(...attached);
  });

  return results;
}

const list = ["a", "b", "c"];
const pick = 2;
const result = getCombination(list, pick);
console.log(result);
