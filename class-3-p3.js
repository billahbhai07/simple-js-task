
let str = "Programming";
str = str.toLowerCase();
let count = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    count++;
  }
}

console.log("Vowels:", count);
