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