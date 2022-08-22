// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

let asdf = true;
// Write your solution below:
for(let i = 0; i < array.length; i++){
    for(let j =0;j < array.length; j++){
     if(array[i] + array[j]){
     } else if(array[i] === 0 && array[j] === 0){
    asdf = true;
 }
    }
}
if(asdf === true){
    console.log(asdf);
} else{
    console.log(f);
}