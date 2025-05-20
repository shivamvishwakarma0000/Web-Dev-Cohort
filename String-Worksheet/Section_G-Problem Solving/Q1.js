//Count vowels in a given string using includes() or any string method.

let str = "Hello World";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of str) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log(count);


//-----------output---------
//3
