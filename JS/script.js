//1st Variables and Datatype
const profile = {
    username: "dewakarki",
    isfollow: true,
    post: 0,
    followers: 85,
    following: 49,
    bio: "My eyess!!! My eyes!!!",
};
console.log(profile["bio"]);



//2nd Operators and Conditional sentences
const product = {
    title: "Pen",
    rating: 4,
    offer: 5,
    price: 50,
};
console.log(product);


let a=8;
if (a%4 == 0){
    console.log(a, "is a multiple of 4.");
}
else {
    console.log(a, "is not a multiple of 4.");
}


let score=prompt("Enter your score: ");
if (score>=90 && score<=100) {
    console.log("A");
}
else if (score>=70 && score<=89) {
    console.log("B");
}
else if (score>=60 && score<=69) {
    console.log("C");
}
else if (score>=50 && score<=59) {
    console.log("D");
}
else{
    console.log("F");
}



//3rd Loops and Strings
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("num", i);
    }
}

let num = 43;
let usernum = parseInt(prompt("Guess the number that you think the Dewa selected:"));
while( usernum !== num) {
    usernum = parseInt(prompt("Take another guess:"));
}

console.log("Well you did it");


let name= prompt(" Enter your name:");
let username= "@" + name + name.length;
console.log("Your username is", username);



//4th Arrays
let marks= [85, 97, 44, 37, 76, 60];
let sum=0;
for( i=0; i<marks.length; i++) {
    sum += marks[i];
}
let average= sum / marks.length;
console.log("The average marks of the class is", average);

// or
// for (let val of marks){
//     sum += val;
// }
// .......
// console.log(`avg marks of the class = ${avg}`);


let prices = [250, 645, 300, 900, 50];
let finalprices;
for ( i=0; i<prices.length; i++ ){
    finalprices= prices[i] - (1/10 * prices[i]);    // prices[i]/10; and then prices[i] -= finalprices; 
    console.log(finalprices);
}


let company = ["Bloomberg", "Microsoft", "Google", "IBM", "Netflix", "Brave"];
// company.shift();
// company.splice(4,1, "PrimeVideos");
company.push("Amazon");



//5th Functions & Methods
function vowelCount(string){
   let vowCount=0;
   for (let i of string){
      if (i=="a" || i=="e" || i=="i" || i=="o" || i=="u" || i=="A" || i=="E" || i=="I" || i=="O" || i=="U"){
         vowCount++;
        }
    }
    console.log("The total number of vowels in the text is", vowCount);
}


let Vowelcount = (string) => {
    let Vowelcou=0;
   for (let i of string){
      if (i=="a" || i=="e" || i=="i" || i=="o" || i=="u" || i=="A" || i=="E" || i=="I" || i=="O" || i=="U"){
         Vowelcou++;
        }
    }
    return Vowelcou;
}


let array=[2,4,6,8,10];
array.forEach(function square(val){
    console.log(val*val);
});

let arr= [12, 34, 56, 78, 90];          // another way to write the above function using arrow function
arr.forEach((val) => {
    console.log(val * val);
});

let arrays= [1, 2, 3, 4, 5];           // another way to write the above function using callback function
let sq = (val) => {
    console.log(val * val);
}
arrays.forEach(sq);


let marksofStudent= [85, 97, 44, 37, 76, 60, 95, 100, 99, 88, 91];
let filteredmarks= marksofStudent.filter((val) => {
    return val >= 90;
});
console.log(filteredmarks);


let n= parseInt(prompt("Enter any number:"));
let arrayofNumber= [];
for (let i=1; i<=n; i++){
    arrayofNumber[i-1]= i;
}
console.log(arrayofNumber);

const output = arrayofNumber.reduce((acc, val) => {   //sum of numbers in the array using reduce method
    return acc + val;
});
console.log(output);

const productofNumbers = arrayofNumber.reduce((res, val) => {   //product of numbers in the array using reduce method. Its also called as factorial.
    return res * val;
});
console.log(productofNumbers);



//6th DOM
let h2= document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " This is Dewa's first DOM manipulation";


let divs = document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText = "This is the first div";
divs[1].innerText = "This is the second div";
divs[2].innerText = "This is the third div";

//let idx = 0;
// for (let div of divs){
//     div.innerText = `This is the div number ${idx}`;
//     idx++;
// }


let btn1 = document.createElement("button");
btn1.innerText = "Click Me";
btn1.style.backgroundColor = "red";
btn1.style.color = "white";
document.querySelector("body").prepend(btn1);


let para3 = document.querySelector("p");
para3.classList.add("newPara");



// 7th Events
let mode = document.querySelector("#modeButton");
let Currentmode = "light";
mode.addEventListener("click", () => {
    if (Currentmode === "light") {
        Currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
       
    } else {
        Currentmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log("The mode is", Currentmode);
});

