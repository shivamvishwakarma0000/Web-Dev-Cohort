//Q5
//Write a function that takes a string as input and determines if it contains the letter 'a'
//or ‘A’.

function check(input_string) {
    if(input_string.includes("a","A")){
        return "Yes include a or A";
    }
    else{
        return "No include a or A";
    }

}
let result=check("shivam")
console.log(result)

//output

//Yes include a or A