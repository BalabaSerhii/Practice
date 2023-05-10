
const singleBtn = document.querySelector('#single');

const handleClick = () => {
	console.log('click event listener callback');
}

singleBtn.addEventListener('click', handleClick);

//==============================================================


const multyBtn = document.querySelector('#multiple');

const one = () => {
	console.log("Привет");
};


const two = () => {
	console.log('qwerqwerqwer');

};


multyBtn.addEventListener('click', one);
multyBtn.addEventListener('click', two);







console.log();

