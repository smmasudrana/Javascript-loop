// const: value will not change
// let: value can change
// var: we should not use it


const numbers=[12, 50, 56, 98, 68, 83]
for(const num of numbers){
    console.log(num);
}

const fruits = ['apple','orange', 'jackfruits', 'pineapple']
for(const fruit of fruits) {
    console.log(fruit);
    console.log('khabo');
}


const number =7;
if (number < 10){
    console.log('soto akta number paisi')
}
console.log('something is cooking')



// while loop structure
// let num = 0;           //loop variable
// while(num < 5) {       //loop condition
//     console.log(num);  //loop statement
//     num++;             //loop variable change
// }


let num =0;
while(num < 5) {
    console.log('loop hotey thak');
    num = num +1;
    // num +=1; shortcut
    // num ++;
}

let num =1;
while(num <=10){
    console.log('kire valo achis?');
    num++;
}


