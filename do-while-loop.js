var i = 1
do {
    if (i % 2 == 1) {
        console.log(i)
    }
    i++
}
while (i <= 10);



// =====================================
var i = 3
do {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++
}
while (i <= 10);


//=============================
var i = 12;
do {
    if (i > 1) {
        console.log(i)

    }
    i++
} while (i <= 10);


//==================multyply=========================
let c = 5;
let b = 1;
do {
    console.log(c * b)
    b++
}
while (b <= 4);




// /////////////////////////////////////////
let readlineSync = require("readline-sync");
var a = readlineSync.question('enter your question');
var i = 0;
do {
    if (a % 3 == 0 && a % 7 == 0) {
        console.log('navgurukul')
        break;

    } else if (a % 7 == 0) {
        console.log('gurukul')
        break;
    } else if (a % 3 == 0) {
        console.log('nav')
        break;
        i++

    }

}
while (i < a);




//=========



const birds = {
    name: "Bald Eagle",
    type: "Hawk",
    ScientificName: "HaliaeetusLeucocephalus"
}

console.log(Object.values(birds).length)


// ==================================================




const n = require("readline-sync");
var name = n.question("enter name: ")
const store = name;
var string = ""
for (let i = name.length - 1; i >= 0; i--) {
    string = string + name[i]
}
if (store === string) {
    console.log("its palindrome string")
} else {
    console.log("it's not a palindrome string")
}