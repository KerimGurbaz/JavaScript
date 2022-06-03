
// Count Digits

// Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.

// For example, d=2, low= 10, high = 23 then the output will be 6, as digit d = 2 occurs 6 times: 12, 20, 21, 22, 23.



let d = 2;
let low = 10;
let high = 23;
let counted = 0;
let result = []
let newArray = []


for (let i = low; i <= high; i++) {
    if (i.toString().includes(d)) {
        result.push(i)

    }
}
console.log(result);
result.forEach(element => {
    newArray.push(...Array.from(element.toString()));
});
console.log(newArray.filter(x => x == d).length);
