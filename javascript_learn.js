// // this file is for JS.html
// // console.log() is used as print statement
// console.log("Hello world")
// var a = 324
// console.log(a%2)

// // ------------declaring variables with var have global level scope while let have block level scope so we should use let only------------------------------

// // strings 
// var s = "I am 'Vision'"
// console.log(s)
// var s = 'I am "Vision"'
// console.log(s)
// var s = `I am '"Vision"'`
// console.log(s)
// name = 'Vison'
// s = `My name is ${name}`
// console.log(s)

// // ------------------------------      String functions are as follows:-   ------------------------------

// // indexOf
// // charAt
// // slice
// // substr
// // substring
// // replace
// // toLowerCase
// // toUpperCase

// // ------------------------------using let------------------------------
// let b = "Vision"
// {
//     let b = "Vis"
//     console.log(`Within the block :- ${b}`)
// }
// console.log(`outside the block :- ${b}`)


// // const a can't be changed
// const x = 24
// console.log(x)
// // x=35 will give error

// // ------------------------------if-else syntax is same as cpp------------------------------

// let age=23
// if(age>18){
//     console.log("You can drink alcohal ")
// }
// else if(age <18){
//     console.log("You can't drink alcohal ")
// }
// else{
//     console.log("get lost")
// }

// ------------------------------Switch case------------------------------

// cups = 25
// switch (cups) {
//     case 23:
//         console.log(`There are ${cups} cups`)
//         break;
//     case 24:
//         console.log(`There are ${cups} cups`)
//         break;
//     case 25:
//         console.log(`There are ${cups} cups`)
//         break;
//     case 26:
//         console.log(`There are ${cups} cups`)
//         break;
//     case 27:
//         console.log(`There are ${cups} cups`)
//         break;

//     default:
//         console.log("None of the above")
//         break;
// }

// // ------------------------------Arrays and objects------------------------------

// let employee = {
//     name:"Vision",
//     skills: "Competitive programming",
//     age:25,
//     ismarried:false,
// }
// console.log(employee)
// console.log(employee["name"])
// console.log(employee.name)

// let array = [1,98,34, true, false, undefined,"Vision"]
// console.log(array)
// console.log(array[0])
// console.log(array[1])
// array = array.sort()
// console.log(array)

// // Making a new array of size 23
// let names = new Array(23);
// names[0] = "This is the end"
// names[1] = "End is the beginning"
// names.push("Vision")
// console.log(names)

// // ------------------------------Functions in Javascript------------------------------

// function greet(name){
//     console.log(`Good Morning,${name}`)
// }
// greet("Vision")

// ------------------------------Interaction using alert, prompt and confirm------------------------------
// alert("This is an alert message and it doesn't return anything.")

// let name = prompt("What is your name?", "Guest")

// let deletepost = confirm("Do you really want to delete the post ?")
// console.log(deletepost)

// ------------------------------getElement syntax------------------------------

// let container = document.getElementById("container")
// console.log(container.innerHTML)
// container.innerHTML = "<p>This is my project and thus stay away from it.</p>"
// console.log("Mission accomplished")

// // ------------------------------learn the loops yourself ------------------------------
// learn it as it is necessary

// let para = document.getElementById("para");
// function toggle(){
//     let para = document.getElementById("para");
//     if(para.style.display !="none"){
//         para.style.display = "none";
//     }
//     else{
//         para.style.display = "block";
//     }
// }
// console.log(para)
// para.addEventListener("mouseover",function run(){
//     alert("Mouse inside the toggle button")
// })

// --------------------------setTimeout and clearTimeout-------------------------------
// let named = prompt("What is your name ?", "User287")

// let named = "Vision"
// function greet(name){
//     console.log("Good morning" + name);
// }

// timeout = setTimeout(greet, 5000,named);
// clearTimeout(timeout)
// clearTimeOut will cancel the settimeOut command and it may be used in following condition:-
// Let's think that i have set the sigup form timeout for 20 seconds and user signsup before 20 seconds so, he shohuld not see the signup 
// form again so i can cleartimeout if the user signsup beforre 20 seconds.

// intervalID = setInterval(greet,1000,"dougher")
// clearInterval(intervalID)

// function displayTime(){
//     time = new Date();
//     console.log(time);
//     document.getElementById("time").innerHTML = time;
// };
// setInterval(displayTime, 1000);

// // -------------------------------Date and time tutorial---------------------------------

// let now = new Date()
// console.log(now)
// // The reference to date is :-
// let dt = new Date(0)
// console.log(`the reference to date is ${dt}`)

// // let newdate = new Date(year,month, date, hour, minute, second, milisecond)
// let newdate = new Date(34323,5,15,6,50,53,100)
// console.log(newdate)

// // ----------Some inbuilt functions of date and time----------

// let yr = newdate.getFullYear()
// console.log(`present year is ${yr}`)
// let month = newdate.getMonth()
// console.log(`present month is ${month}`)
// newdate.setFullYear(2022)
// yr = newdate.getFullYear()
// console.log(`present year is ${yr}`)

// // ------------------------- Arrow functions-------------------------
// let a = 5;
// let b=6;
// // let sum = (a,b)=>{
// //     console.log(a+b)
// // }
// let sum = (a,b)=>a+b;
// let c = sum(a,b)
// console.log(c)

// -------------------------Math object functions are:-  -------------------------
// Math.pow()
// Math.random()
// Math.ceil()
// Math.floor()
// Math.round()
// Math.log10()
// Math.loge()
// Math.sqrt()
// Math.abs()

// // -----------Trignometric functions-----------
// Math.sin()
// Math.cos()
// Math.tan()

// console.log(Math.min(1 , 25,624 ,253411, 153,-513,-53253))
// console.log(Math.max(1 , 25,624 ,253411, 153,-513,-53253))

// ----------------------Random number generator ----------------------
// generates random number between 0 and 1
// console.log(Math.random())