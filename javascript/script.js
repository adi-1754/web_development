// let size = "l";

// if (size == "xl"){
//     console.log(" Price is 250 ");
// }
// else if ( size == "l"){
//     console.log(" Price is 200 ");
// }
// else if (size == "m"){
//     console.log(" Price is 100 ");
// }
// else if (size == "s"){
//     console.log(" Price is 50 ");
// }
// else{
//     console.log(" Invalid size ");
// }



// let str = "ditya";

// if (str[0] == "a" && str.length > 3){
// console.log(" this string is good ");
// }else{
//     console.log(" this string is not good ");
// }



// let day = 1;

// switch (day) {
//     case 1:
//     console.log(" Monday ");
//     break;
//     case 2:
//         console.log(" Tuesday ");
//         break;
//     case 3:
//         console.log(" Wednesday ");
//         break;
//     case 4:
//         console.log(" Thursday ");
//         break;
//     case 5 :
//         console.log(" Friday ");
//         break;
//     case 6:
//         console.log(" Saturday ");
//         break;
//     case 7 :
//         console.log(" Sunday ");
//         break;
//     default:
//         console.log(" Invalid day ");
// }




// let num1 = "11";
// let num2 = "22";
// num1_len = num1.length;
// num2_len = num2.length;

// if ((num1[num1_len - 1 ]) == num2[num2_len - 1]){
//     console.log(" last digit is same ");
// }else{
//     console.log(" last digit is not same ");
// }



// let msg = "help";
// upper_msg = msg.toUpperCase();
// console.log(upper_msg);



// let name = "Apna College";
// let name2 = name.slice(4,12);
// let name3 = name2.replace("l","t");

// console.log(name3.replace("l","t"));



// let months = ["january","july","march","agust"];
// console.log(months);

// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);



// function dice(){
//     let list = [1,2,3,4,5,6];
//     let random = Math.floor(Math.random() * list.length);
//     console.log(list[random]);
// }

// dice();



// function avg(num1,num2,num3){
//     let avg_num = (num1 + num2 + num3)/3;
//     console.log(" Average of three numbers is : " + avg_num);
// }

// avg(10,20,30);



// function table(num){
//     for (let i = 1 ; i <= 10; i++){
//         console.log("num = ",num * i );
//     }
// }
// table(5);



// function sum(num){
//     let total = 0;
//     for(let i = 0 ; i <= num ; i++){
//         total += i;
//     }
//     console.log("sum =",total);
// }
// sum(10);



// let str = "aabbccccddeddeeeffddcccfeddfdefedacdfe";

// function getunique(str){
//     let unique = "";
//     for (let i = 0 ; i < str.length ; i++){
//         if(unique.indexOf(str[i]) == -1){
//             unique += str[i];
//         }
//     }
//     console.log(unique);
// }

// getunique(str);



// const sum = function(a,b){
//     let sum = a + b;
//     return sum;
// }



// function greetfunction(func, count){
//     for(i=1; i<= count; i++){
//         func();
//     }
// }

// const greet = function(){
//     console.log("Hellow World ");
// }

// greetfunction(greet,5);



// function oddevenfactory(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("wrong request");
//     }
// }

// let request = "odd";
// let odd1 = oddevenfactory(request);
// odd1(5);



// console.log("hello world !!");
// console.log("hello world !!");
// console.log("hello world !!");
// try{
//     console.log(a);
// }catch(err){
//     console.log("error caught !!");
//     console.log(err);
// }
// console.log("hello world 2!!");
// console.log("hello world 2!!");
// console.log("hello world 2!!");



// const sum = (a,b) => {
//     console.log(a+b);
// }
// sum(5,4)


// function demo (){
//     console.log("demo function !! ");
// }

// console.log("hello world !!");
// setTimeout( ()=>{console.log("welcome aditya ");},4000)
// console.log("byeeeeee!!!")

// setInterval(demo,1000);


// const object = {
//     message:"hello world !! ",

//     logMessage (){
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000)


// const square = function (n){
//     a=  n*n;
//     console.log(a);
// }
// square(7);



// let id = setInterval( () => {
//     console.log("hello World ")
// }, 2000)

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("Clear interval is call ");
// },10000)



// let arr = [1,2,3,4,5];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);

// OR

// arr.forEach(function(el){
//     console.log(el);
// });


// let num = [1,2,3,4,5];
// let double = num.map((el) =>{
//     return el*2;
// });

// for(let i = 0 ; i < double.length ; i++){
//     console.log(double[i]);
// }



// const student = [
// {
//     name: "aditya",
//     marks: 90,
// },
// {
//     name: "sachin",
//     marks: 80,
// },
// {
//     name: "rohit",
//     marks: 70,
// }

// ];

// let double = student.map((el) => {
//     return el.marks / 10;
// });



// let num = [1,2,3,4,5,11,21,23,24,16,48,16,12,14,15,17,19];
// let odd = num.filter(function(el){
//     return el%2 != 0 ;

// });
// let even = num.filter((el)=>{
//     return el%2 == 0;
// });



// let num =[5,24,26,28,30,32];

// let ans = num.some((el) => {
//     return el%2 != 0;
// });



// let nums = [1,2,3,4];
// let final = nums.reduce((res,el) =>{
//     return res+el;
//  });


// let nums = [1,2,3,4,11];
// let ans =nums.reduce((res,el) => {
//     if (res <el){
//         return el;
//     }else{
//         return res;
//     }
// });



// let nums = [10,20,30,40,65];
// let ans = nums.every((el) => {
//     return el % 10 == 0;
//     });




// let nums = [1,2,3,4,5];
// let ans = nums.reduce((res,el) => {
//     if(res > el){
//         return el ;
//     }else{
//         return res;
//     }
// });




