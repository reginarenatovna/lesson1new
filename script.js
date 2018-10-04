'use strict';

var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
var budget;
var timeData;
var expenses;
var optionalExpenses;
var income;

console.log(money);
console.log(time);

var appData = {
	budget: money,
	timeData: time,
	expenses: {
		answerOne: "",
		answerTwo: ""
	},
	optionalExpenses: {},
	income: [],
	savings: false
};

let answerOne = prompt("Введите обязательную статью расходов в этом месяце");
let answerTwo = prompt("Во сколько обойдется?", " ");

expenses = {
	answerOne: answerTwo
};
console.log(expenses);
alert(money/30);
