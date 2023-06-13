const btnEl = document.querySelector("#btn");
const btnEl1 = document.querySelector("#btn1");
const text = document.querySelector(".text-input");
const body = document.querySelector("#body");



// const book = {
// 	title: "Nazvanie knigi",
// 	autor: "Balaba Sergey",
// 	genres: ["prikly4eniy", "draki"],
// 	isPublick: true,
// 	rating: 8.1,

// };

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };


// ✅ Логически и синтаксически сгруппированные сущности
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Это метод объекта
  getBooks() {
    console.log("Этот метод будет возвращать все книги - свойство books");
  },
  // Это метод объекта
  addBook(bookName) {
    console.log("Этот метод будет добавлять новую книгу в свойство books");
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook("Новая книга");


// btnEl.addEventListener("click", () =>
// 	{text.height = "200px"}

// )

// // btnEl1.addEventListener("click", () =>
// // 	console.clear("fff"));































// // btnEl.style.textTransform = "uppercase"



// btnEl1.addEventListener("click", () =>
// 	btnEl.style.textTransform = "lowercase",
// 	btnEl.style.color = "red")


// 	btnEl.addEventListener("click", () =>
// 	btnEl.style.textTransform = "uppercase",
// 	btnEl.style.color = "green")

// body.addEventListener("click", () =>
// btnEl.style.color = "red")









// const nonOk = "Недостаточно средств";
// const okey = "Операция успешная";
// const bal = "Нужно ввести что-то больше 0";


// const test = function withdraw(amount, balance) {
// 	if (amount === 0) {
// 		console.log(bal);
// 		return;
// 	}
	
// 	if (amount > balance) {
// 		console.log(nonOk);
// 		return;
// 	}

// 	console.log("okey");
	
// }

// test(1330, 103);


