
let arr = [1,2,3,4,5,6,7,8,9,10];


// iterative approach 
function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log(mid)
        if(arr[mid] === target) {
            return `Element found!`;
        }

        if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log("iterative", binarySearch(arr, 2));
//iterative



//recursive approach
// function recursiveBinarySearch (arr, target, left, right) {
    
//     if(left > right) return false
    
//     let mid = Math.floor((left + right) / 2);
    
//     if(arr[mid] === target) return true
    
//     if(arr[mid] > target) {
//         return recursiveBinarySearch(arr, target, left, mid - 1)
//     } else {
//         return recursiveBinarySearch(arr, target, mid + 1, right);
//     }
// }

// const check = recursiveBinarySearch(arr, 1, 0, arr.length - 1)

// if(check) {
//     console.log("The element found!");
// } else {
//     console.log("The element not found");
// }
//recursive approach

