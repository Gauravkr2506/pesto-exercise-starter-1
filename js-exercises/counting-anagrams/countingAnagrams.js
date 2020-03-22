const countingAnagrams = str => {
  if (str === undefined) throw new Error("Expected string got undefined");
  let anagram_array = str.split(" ").filter(str => str.length > 1);
  let length = anagram_array.length;
  let anagram_count = 0;
  for (let index = 0; index < length - 1; index++) {
    if (isAnagram(anagram_array[index], index, anagram_array)) anagram_count++
  }
  return anagram_count;
};

function isAnagram(value, index, anagram_array) {
  let is_anagram = false;

  function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    if (!str1.split("").every(str => str2.includes(str))) return false
    if (!str2.split("").every(str => str1.includes(str))) return false
    return true;
  }

  let length = anagram_array.length;
  for (let j_index = 0; j_index < length - 1; j_index++) {
    if (j_index < index && checkAnagram(anagram_array[index], anagram_array[j_index])) break;

    if (j_index > index && checkAnagram(anagram_array[index], anagram_array[j_index])) {
      is_anagram = true;
      break;
    }

  }
  return is_anagram;
}

module.exports = {
  countingAnagrams
};