// const btnEl = document.querySelector("#btn");
// const btnEl1 = document.querySelector("#btn1");
// const text = document.querySelector(".text-input");
// const body = document.querySelector("#body");
// const output = document.querySelector("#output")

const numbers = [21, 3,  4353, 675, 65, 231];
let small = numbers[0];

for (let number of numbers) {
  if (number < small) {
    small = number;
  }
}

console.log(small)






























// const logins = ['Dimon', 'Serega', 'Andrey', 'Pipiay'];
// const fiendUsers = 'Andddrey';
// let mess = `Пользователь ${fiendUsers} не найден`;


// const test = logins.includes(fiendUsers) ? `Пользователь ${fiendUsers} найден` : mess;

// alert(test)

// console.log(mess)




// const trtr = logins.includes(fiendUsers);

// if (trtr === true) {
//   mess = `Пользователь ${fiendUsers} найден`;
  
// }




// for (let i = 0; i < logins.length; i+=1) {
  //   const fiend = logins[i];
  //   if (fiend === fiendUsers) {
    //     mess = `${fiendUsers} найден! Добро пожаловать!`;
    
    //   }
    
    // }
    
    
    // console.log(mess);
    
    
    // for (const login of logins) {
    //   if (login === fiendUsers) {
    //     mess = `Пользователь ${fiendUsers} найден`
    //   }
    // }
    
    
    
    
    
    