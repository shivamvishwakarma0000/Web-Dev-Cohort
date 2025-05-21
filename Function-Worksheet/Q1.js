//Q1
//Write a function that takes person age as a number as input and determines, person
//are eligible or not for voting.

function checkVotingEligibility(age) {
    if (age >=18){
        return "Eligible for voting";
    }
    else{
        return "Not Eligible for voting";
    }
}
let result=checkVotingEligibility(18)
console.log(result)

// output
//Eligible for voting