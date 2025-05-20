//Capitalize the first letter of each word in a sentence.

let sentence = "shivam vishwakarma";

let capitalized = sentence
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized);


//-----------output---------
//Shivam Vishwakarma