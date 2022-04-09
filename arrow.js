# Suppose we have an arrow function that takes the array [1,2,3,4,5] as a parameter. Let the result of this array return us a new array. Let the even numbers in the new array be multiplied by 2 and the odd numbers multiplied by 3. [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Our resulting output will be **[3,4,9,8,15]**.

const newArray = (nums) => {
    const newNums = nums.map(e=>{
        if (e%2 ==0){
            return e*2
        } else if(e%2==1){
            return e*3
        }
    })
    return newNums
}

console.log(newArray([1,2,3,4,5]));
