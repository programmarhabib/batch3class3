/**
 * Find GPA and Grade with respect to Marks in any subject
 * assginment 01
 */

// let mark=prompt("mark");

// let Grade;
// let Gpa;
// if (mark>=0 && mark<33) {
//     console.log(Grade="F");
//     console.log( Gpa=0.00);
// }else if (mark>=33 && mark<40) {
//     console.log(Grade="D");
//     console.log(Gpa=1.00);
// }else if (mark>=40 && mark<50) {
//     console.log(Grade="C");
//     console.log(Gpa=2.00);
// }else if (mark>=50 && mark<60) {
//     console.log(Grade="B");
//     console.log(Gpa=3.00);
// }else if (mark>=60 && mark<70) {
//    console.log( Grade="A-");
//     console.log(Gpa=3.50);
// }else if (mark>=70 && mark<80) {
//     console.log(Grade="A");
//     console.log(Gpa=4.00);
// }else if (mark>=80 && mark<=100) {
//     console.log(Grade="A+");
//     console.log(Gpa=5.00);
// }else{
//     console.log("invalid number");
// }

 
/**
 * Create a loop that will rotate from 1000 to 300
 * assignment 02 
*/ 

for(let index3=1000; index3>=300; index3--){
    console.log(index3);
}


/**
 * Find the even and odd numbers from 1 and 1000 through for loop
 * assignement 03
*/ 
for(let index4=1; index4<=1000; index4++){
    if (index4%2==0) {
        console.log(`even number= ${index4}`);
    }
    if (index4%2 !=0) {
        console.log(`odd number= ${index4}`);
    }
}

/**
 * Find the number divisible by 7 between 1 and 1000
 * assignment 04 with while loop
*/

let index6=1;
while (index6<=1000) {
    if (index6%7==0) {
console.log(`the number divisible by 7=${index6}`);    
    }
    index6++
}


/**
 * Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11
 * assignment 05
*/

for (let index5 = 1; index5<1000; index5=index5+3) {
    console.log(index5);
    if (index5 % 11 === 0) {
         break;  
    }
    
}

/**
 * Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4
 * assignment 06
*/

for(let init=1; init<=500; init++){
    if (init % 3 == 0 && init % 4 == 0) {
        console.log(init);
    }
}

/**
 * Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operators twice.
 * assignment 07
*/

for(let index1=10000; index1<=10050; index1++){
    console.log(`increment=${index1}`);
}
for(let index2=10000; index2<=9050; index2--){
    console.log(`deccrement=${index2}`);
}

