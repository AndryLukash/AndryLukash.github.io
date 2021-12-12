"use strict"

//Объект калькулятор: Тип сайта[], Дизайн[], Адаптивность[].
let Calc = {
	Type:{
		Type1: {
			name: "1 сайт-визитка - 1000р", 
			price: 1000,
			time: 1,
		},
		Type2: {
			name: "2 корпоративный сайт - 2000р",
			price: 2000,
			time: 2,
		},
		Type3: {
			name: "3 интернет-магазин - 3000р",
			price: 3000,
			time: 3,
		},
		TypeChoise: 0,
	},
	Design:{
		Design1: {
			name: "1 шаблонный дизайн - 1000р", 
			price: 1000,
			time: 1,
		},
		Design2: {
			name: "2 уникальный - 2000р",
			price: 2000,
			time: 2,
		},
		Design3: {
			name: "3 привлечение дизайнера - 3000р",
			price: 3000,
			time: 3,
		},
		DesignChoise: 0,
	},
	Adapt:{
		Adapt1: {
			name: "1 только для ПК  - 1000р", 
			price: 1000,
			time: 1,
		},
		Adapt2: {
			name: "2 для телефонов и планшетов - 2000р",
			price: 2000,
			time: 2,
		},
		Adapt3: {
			name: "3 адаптивная вёрстка - 3000р",
			price: 3000,
			time: 3,
		},
		AdaptChoise: 0,
	},
	totalPriceSum(){
		return Calc.Type["Type" + Calc.Type.TypeChoise].price + Calc.Design["Design" + Calc.Design.DesignChoise].price + Calc.Adapt["Adapt" + Calc.Adapt.AdaptChoise].price;

	},
	totalDaySum(){
		return Calc.Type["Type" + Calc.Type.TypeChoise].time + Calc.Design["Design" + Calc.Design.DesignChoise].time + Calc.Adapt["Adapt" + Calc.Adapt.AdaptChoise].time;

	},
};

function customerCall(){
	Calc.Type.TypeChoise = prompt("какой тип сайта желаете?\n1 сайт-визитка - 1000р\n2 корпоративный сайт - 2000р\n3 интернет-магазин - 3000р",
		"1-3");

	Calc.Design.DesignChoise = prompt("какой тип сайта желаете?\n1 шаблонный дизайн - 1000р\n2 уникальный - 2000р\n3 привлечение дизайнера - 3000р",
		"1-3");

	Calc.Adapt.AdaptChoise = prompt("какой тип сайта желаете?\n1 только для ПК  - 1000р\n2 для телефонов и планшетов - 2000р\n3 адаптивная вёрстка - 3000р",
		"1-3");
}

// customerCall();	
setTimeout(customerCall, 2000);

console.log(Calc);
console.log(Calc.Type.TypeChoise);
console.log(Calc.Type.DesignChoise);
console.log(Calc.Type.AdaptChoise);


function customerResults(){
	alert("Итого:\nСтоимость составит: " + Calc.totalPriceSum() + " рублей" + "\nКоличество дней, которые понадобятся на решение задачи: " + Calc.totalDaySum());

}

customerResults();


