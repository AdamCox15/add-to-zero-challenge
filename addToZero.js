// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
let a = true;
// Write your solution below:
for(let i = 0; i < array.length; i++){
    for(let j =0;j < array.length; j++){
     if(array[i] + array[j]){
     } else if(array[i] === 0 || array[j] === 0){
    a = true;
 }else {
    if(array[i]+ array[j] === 0){
        a = true;
    }
 }
    }
}
if(a === true){
    console.log(a);
} else{
    console.log(a);
}



for(let i = 0; i < array.length; i++){
    for(let j = 0; j< array.length; j++){
        if(array[i] + array[j] === 0){
          console.log(true);
            //console.log(`The value of i is ${array[i]} and the value of j is ${array[j]}.`);
        } else{
            console.log(false);
           }
    }
}