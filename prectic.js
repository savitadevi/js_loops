let readline = require("readline-sync");
var a = readline.question("eneter your number")
var b = readline.question("enter your number");
if (a > b) {
    console.log("a is gretor", a)
} else {
    console.log("b is gretor", b)
}
// =============================================


let readline = require("readline-sync");
var marks = readline.questionInt("eneter your number")
var Name = readline.question("eneter your name");
if (marks < 60) {
    console.log(Name, "f ")
} else if (marks > 60 && marks <= 70) {
    console.log(Name, "D")
} else if (marks > 70 && marks <= 80) {
    console.log(Name, "c")
} else if (marks > 80 && marks <= 90) {
    console.log(Name, "B")
} else if (marks > 90 && marks <= 100) {
    console.log(Name, "a")
}



// ===========================================

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "fizzBUZZ")
    } else if (i % 3 == 0) {
        console.log(i, "Fizz ")
    } else if (i % 5 == 0) {
        console.log(i, "Buzz")
    } else {
        console.log(i)
    }
    i++


}



// =============================================


var i = 0
while (i <= 15) {
    if (i % 2 == 0) {
        console.log(i, "even")
    } else {
        console.log(i, "odd")
    }
    i++
}



// // =========================================





var a = [0, -5, -1, -6, -2];
var i = 0;
var max = 0;
while (i < a.length) {
    if (a[i] > max) {
        max = a[i]
    }
    i++
}
console.log(max)



// ================================================
var a = [0, -1, 4];
var i = 0;
var b = 0;
while (i < a.length) {
    j = 0
    while (j < a.length) {
        if (a[i] > a[j]) {
            b = a[j]
            a[j] = a[i]
            a[i] = b
        }
        j++
    }
    i++
}
console.log(a)

// ===========================






let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
console.log(part)


// ===============================









function add(a, b) {
    return a + b
}
var ridhi = function(c, d) {
    console.log(add(10, 20))
    return c + d
}
console.log(ridhi(30, 40))


// ===================================



var a = 1;
while (a <= 100) {
    console.log(a)
    a = a + 1
}
// =====================================


var count = 1;
while (count < 10) {
    console.log(count);
    count += 2;
}


// ==============================




a = 12
console.log(a)
var a;
// ========================================


var a = [0, 1, 3, 4, 5, 0];
var i = 0;
var b = []
    // let d = []
var c = []
while (i < a.length) {
    if (a[i] == 0) {
        b.push(a[i])
    } else {
        c.push(a[i]);
    }
    i++

}
var x = c.concat(b)
console.log(x);


// =====================================