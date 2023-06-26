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
	// 	const test = stringAll === stringAll.toLowerCase();
	// 	inverted += test ? stringAll.toUpperCase() : stringAll.toLowerCase();
	// }
	// console.log(inverted)

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
		
		
    
    
    