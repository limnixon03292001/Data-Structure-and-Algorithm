

let arr = [1,2,3,4,5];

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return console.log(`Element found! ${arr[i]}`);
        } 
    }

    return console.log(`Element not found!`);
}

linearSearch(arr, 4);