const orders = [
	{
		customerName: "Nicolas",
		total: 120,
		delivered: true,
	},
	{
		customerName: "Diego",
		total: 200,
		delivered: false,
	},
	{
		customerName: "Alejandra",
		total: 130,
		delivered: true,
	},
];
// console.log("original", orders);
// const newArray = orders.map((item) => item.total);
// console.log("new", newArray);

const newArray2 = orders.map((item) => {
	return {
		...item,
		tax: 0.19,
	};
});

console.log("newArray2", newArray2);
console.log("original", orders);
