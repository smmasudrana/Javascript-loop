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