const orders = [
    {
        customerName: "Franz" ,
        total: 60,
        delivered: true,
    },
    {
        customerName: "Yulemy" ,
        total: 120,
        delivered: false,
    },
    {
        customerName: "Rodrigo" ,
        total: 180,
        delivered: true,
    },
    {
        customerName: "Zulema" ,
        total: 240,
        delivered: true,
    },  
];

const rta = orders.map(item => item.total);
console.log ("original", orders);
console.log ("rta", rta);

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item
// });
const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
});
console.log ("original", orders);
console.log ("rta3", rta3);




