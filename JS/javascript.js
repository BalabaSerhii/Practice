// const btnEl = document.querySelector("#btn");
// const btnEl1 = document.querySelector("#btn1");
// const text = document.querySelector(".text-input");
// const body = document.querySelector("#body");
// const output = document.querySelector("#output")

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Соеденить+добавить "," и отрезать вконце её.

// const names = ["Marina", "Sergey", "Kira"];
// let namesAll = "";
// for (const name of names) {
//   namesAll += name + ",";
// }
// namesAll = namesAll.slice(0, namesAll.length - 1)
// console.log(namesAll);

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Соеденить+добавить "," и отрезать вконце её.
// const names = ["Marina", "Sergey", "Kira"];
// const soedenit = names.join(', ');
// console.log("~ ~ soedenit:", soedenit)
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Поиск пользователя. Есть или нету в базе

// const logins = ['Dimon', 'Serega', 'Andrey', 'Pipiay'];
// const fiendUsers = 'Andrey';
// let mess = `Пользователь ${fiendUsers} не найден`;
// const test = logins.includes(fiendUsers) ? `Пользователь ${fiendUsers} найден` : mess;
// console.log(test)
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Заменить регистр букв на противоположный. Первый вариант устарел
// const string = 'JavaScript';
// const stringNew = string.split('');
// let inverted = '';

// for (const letter of stringNew) {
// 	if (letter === letter.toLowerCase()) {
// 		console.log('эта буква в нижнем регистре -', letter)
// 		inverted += letter.toUpperCase();
// 	} else {
// 		inverted += letter.toLowerCase();
// 	}
// }
// console.log(inverted)
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// / Заменить регистр букв на противоположный. Второй вариант норм
// const string = 'JavaScript';
// const stringNew = string.split('');
// let inverted = '';

// for (const stringAll of stringNew) {
// 		const test = stringAll === stringAll.toLowerCase();
// 		inverted += test ? stringAll.toUpperCase() : stringAll.toLowerCase();
// 	}
// 	console.log(inverted)

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Делаем slug в URL из названия статьи.
// -Нормализируем строку
// -Разбиваем по словам
// -Сшиваем в строку с разделителями

// const title = 'Top 10 benefists of React Framework';
// const normolize = title.toLowerCase().split(' ').join('-')
// console.log("~  normolize:", normolize)
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//  Скрипт который считает сумму элементов двух массивов.
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const sums = array1.concat(array2);
// for (const sum of sums) {
	// 	total += sum;
	// }
	// console.log(total);
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	// Работаем с коллекцией карточек в trello
	// -метод splice()
	// 	- удалить
	// 	- добавить
	// 	- обновить
	
	// const cards = [
		// 	'Карточка-1',
		// 	'Карточка-2',
		// 	'Карточка-3',
		// 	'Карточка-4',
		// 	'Карточка-5',
		// ];
		// console.table(cards)
		// удаление
		// const cardToRemove = 'Карточка-3';
		// const index = cards.indexOf(cardToRemove);
		// cards.splice(index, 1);
		// console.table(cards);
		
		// добавление
		// const cardToInsert = 'Карточка-6';
		// cards.splice(1, 0, cardToInsert);
		// console.table(cards);
		
		// обновление
		// const cardToUpdate = 'Эта штука заменила(обновила) 2ю карточку';
		// cards.splice(1, 1, cardToUpdate);
		// console.table(cards);
		/////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////
		//Функция которая считает сумму покупок в массиве
		// const aff = function (items) {
			// 	let total = 0;
			// 	for (const item of items) {
				// 		total += item
				// 	}
				// 		return total
				// 	}
				
				// console.log(aff([1, 10, 3]));
				// console.log(aff([13, 105, 323]));
		/////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////
				// Написать функию для перебора и логирования массива
				// const logItems = function (items) {
					// 	for (const item of items) {
						// 		console.log(item);
						// 	}
						// }
						// logItems(['Mango', 'Kivi', 'Poly']);
						// logItems([1, 2, 3, 4, 5, 6]);
						// logItems(['клавиатура', 'мышка', 'часы']);
		/////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////
		//Первый способ напиши функцию findLogin(allLogin, login) для поиска логина
		// -Если логина нет, выведи сообщение "Пользователь [логин] не найден"
		// -Если нашли логин, вывести сообщение "Пользователь [логин] найден"
		// const logins = ['Dimon', 'Andrey', 'Sergey', 'Anonimys'];
		
		// const findLogin = function (allLogin, findToLogin) {
			// 		for (const login of allLogin) {
				
	// 		if (login === findToLogin) {
		// 		return `Пользователь ${findToLogin} найден`;
		// 	}
		// }
		// return `Пользователь ${findToLogin} не найден`
		// }
		
		// console.log(findLogin(logins, 'Dimon'))
		// console.log(findLogin(logins, 'fdfsf'))
		// console.log(findLogin(logins, 'Sergey'))
		/////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////
		//Второй способ
		// const logins = ['Dimon', 'Andrey', 'Sergey', 'Anonimys'];
		
		// const findLogin = function (allLogin, fiendUsers) {
		// 	const message = allLogin.includes(fiendUsers)
		// 	? `Пользователь ${fiendUsers} найден`
		// 	: `Пользователь ${fiendUsers} не найден`
		// 	return message;
		// }
		
		// console.log(findLogin(logins, 'Dimon'))
		// console.log(findLogin(logins, 'fdfsf'))
		// console.log(findLogin(logins, 'Sergey'))
		/////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////
		//3й способ
		// const logins = ['Dimon', 'Andrey', 'Sergey', 'Anonimys'];
		
		// const findLogin = function (allLogin, fiendUsers) {
			// 	return allLogin.includes(fiendUsers)
			// 	? `Пользователь ${fiendUsers} найден`
			// 	: `Пользователь ${fiendUsers} не найден`
			// }
			// console.log(findLogin(logins, 'Dimon'))
			// console.log(findLogin(logins, 'fdfsf'))
			// console.log(findLogin(logins, 'Sergey'))
		/////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////
	//Найти самое мальенькое цисло в массиве при помощи функции
// const numbers = [43, 53, 123, 654, -44, 3213, 6546, 567, 2, -3];
// const allNumber = function (num) {
// 	let smallNumber = num[0]
// 	for (const number of num) {
// 		if (number < smallNumber) {
// 			smallNumber = number;
// 		}
// 	}
// 	return smallNumber
// }
// console.log(allNumber(numbers))
/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	// Заменить регистр букв на противоположный при помощи функции.
// const toChangeRegistr = function (tytstroka) {
// 	const inSplit = tytstroka.split('');
// 	let newString = '';

// 	for (const letter of inSplit) {
// 		const test = letter === letter.toLowerCase();
// 		newString += test ? letter.toUpperCase() : letter.toLowerCase();
// 	}
// 	return newString
// }
// console.log(toChangeRegistr('DFFFFjkjjkjkkDDfsdDSg hjgk jhk'))
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//написать функцию которая получает строку и возвращает URL-slug
// строка состоит только из букв и пробелов
// const slugify = function (string) {
// 	return string.toLowerCase().split(' ').join('-');
// 	// const slug = string.toLowerCase().split(' ').join('-')
// 	// return slug
// }
// console.log(slugify('Top 10 benefists of React Framework'));
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Напишите функцию add для сложения произвольного количества аргументов (чисел)
// -Операция ... (rest)
// const add = function (a, s, f, ...args) {
	// 	// console.log(args)
	// 	let tottal = 0;
	// 	for (const arg of args) {
		// 		tottal += arg;
		// 	}
		// 	return tottal;
		// }
		// console.log(add(10, 2, 3, 3, 5));
		/////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////
		//пойми что в этом коде
		// const filterNumbers = function (a, ...args) {
			// 	const intersection = [];
			// 	for (const arg of a) {
				// 		for (const agr1 of args) {
					// 			if (arg === agr1) {
						// 		intersection.push(arg)
						// 	}		
						// 		}
						// 	}
						// 	return intersection;
						// }
						// console.log(filterNumbers([1,2,1,6], 2, 4, 5, 6))// [2,6]
						/////////////////////////////////////////////////////////////////////////////////
						/////////////////////////////////////////////////////////////////////////////////
// второй вариант верхнего кода
const filterNumbers = (a, ...args) => a.filter(arg => args.includes(arg));

console.log(filterNumbers([1, 2, 1, 55, 6], 2, 4, 5, 6)); 























