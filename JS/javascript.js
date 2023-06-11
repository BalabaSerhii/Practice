
const btnEl = document.querySelector("#btn");
btnEl.style.textTransform = "uppercase"

console.log(btnEl.value);


btnEl.addEventListener("click", () => 
	btnEl.style.color = "green");








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


