//Given a string: "JavaScript is Awesome", convert it to:
 // a. All lowercase
 // b. All uppercase
 // c. Replace "Awesome" with "Powerful"
 // d. Check if the string starts with "Java"

 let str = "JavaScript is Awesome";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
let replacedStr = str.replace("Awesome", "Powerful");
console.log(replacedStr);
console.log(str.startsWith("Java"));

//-----------output------------

//javascript is awesome
  JAVASCRIPT IS AWESOME
  JavaScript is Powerful
  true
