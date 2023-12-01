/*for(let count=1;count<=10;count++){
    console.log("sachin yadav");
}*/
/*let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
    console.log(sum);
}*/
//console.log("start with while loop")
/*while loop
let i=1;
let num=0;
while(i<=5){
    num=num+i;
console.log(num);
i++;
}*/
//for of loop is used for arrays and string
/*let str ="sachin";
for (let i of str) {
    console.log("i=",i);
}*/
//--for in loop using for object and arrays---
let student={
    name:"sachin yadav",
    age:20,
    cgpa:5.7,
    ispass:false,
};
for(let key in student){
    console.log("keys",key,"values",student[key])
}
