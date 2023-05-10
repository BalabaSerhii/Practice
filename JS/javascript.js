const addListenerBtn = document.querySelector('[data-action="add"]');
const removeListenerBtm = document.querySelector('[data-action="remove"]');
const btn = document.querySelector('#btn');

const handClick = () => {
	console.log('Это первая строчка в коде');
};

addListenerBtn.addEventListener('click', () => {
	btn.addEventListener('click', handClick);
	console.log("click event listener was added to btn");
})

removeListenerBtm.addEventListener('click', () => {
	btn.removeEventListener('click', handClick);
	console.log("click event listener was removed from btn");
})