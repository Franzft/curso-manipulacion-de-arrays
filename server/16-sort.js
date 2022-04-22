const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
const orders= [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];
orders.sort((a,b) => b.total - a.total);
console.log(orders);

//

const ordersreto= [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2022, 3, 11, 4),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2022, 3, 9, 3),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date (2022, 3, 17, 2),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2022, 3, 3, 9, 30),
    },
  ];
  ordersreto.sort((a,b) => a.date - b.date);
  console.log(ordersreto);