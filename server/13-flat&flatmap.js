const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
const rta = matriz.flat(3);
console.log("for", newArray);
console.log("flat", rta);

//
const matrizReto= [
    1,
    [1,2,3],
    [4,5,6],
    [7,8,[9,10,[11,12]]]
];

const flatArray = (arr = [], data = []) => {
    if(typeof arr !== 'object') return [arr];
    arr.forEach(element => {
        if (typeof element === 'object') {
            flatArray(element, data);
        } else {
            data.push(element);
        }
    });
    return data;
}
console.log(flatArray(matrizReto));