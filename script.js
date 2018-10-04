'use strict';

var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
var budget;
var timeData;
var expenses;
var optionalExpenses;
var income;



var appData = {
	budget: money,
	timeData: time,
	expenses: { },
	optionalExpenses: {},
	income: [],
	savings: false
};

var expensesItem1 = prompt("Введите обязательную статью расходов в этом месяце");
var expensesCost1 = prompt("Во сколько обойдется?", " ");
var expensesItem2 = prompt("Введите обязательную статью расходов в этом месяце");
var expensesCost2 = prompt("Во сколько обойдется?", " ");

appData.expenses = {
	[expensesItem1]: expensesCost1,
	[expensesItem2]: expensesCost2
};

console.log(appData);
alert(money/30);
