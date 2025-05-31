const obj={
    name:"shivam ",
    age:"20",
    marks:{
        dsa:23,
        java:12
    }
}
console.log(obj.marks.java);

const obj2={
    name:"shivam ",
    age:"20",
     greet:function(){console.log(this.name)},
     hobies:[1,2,3,4,5]
}
obj2.greet();
console.log(obj2.hobies[0])