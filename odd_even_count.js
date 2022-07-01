var readlineSync = require('readline-sync');
var a = readlineSync.questionInt("enter your number");
var i = 0;
count_1 = 0;
count_2 = 0;
while (i < a) {

    if (i % 2 == 0) {
        count_1++

    } else {
        count_2++


    }
    i++
}
console.log(count_1, "even")
console.log(count_2, "odd")