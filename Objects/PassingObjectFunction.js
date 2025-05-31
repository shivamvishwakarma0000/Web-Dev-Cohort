// const person = {
//     name: "shivam",
//     age: 30,
//     // occupation: "teacher"
// };

// function detail(obj,newage) {
//    return obj.age=newage
//     // return `${obj.name} ${obj.occupation}`;
// }

// console.log(detail(person,"32")); 


const Youtube = {
    channel: "alpha intern",
    like: 100
};

function getVideosView(obj) {
    return obj.like; // Accessing like from the object
}

console.log(getVideosView(Youtube)); // ✅ Function call with object
