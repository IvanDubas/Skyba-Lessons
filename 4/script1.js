/*console.log(0.1+0.2);// математичне вирахування додавання

 Перевірка логіна і пароля користувача при вході в адмін панель


let userName = prompt ("Введіть логін користувача");
let userPass = prompt ("Введіть пароль користувача "); 
const adminName = 'admin';
const adminPass = '12pass33210';
if (userName===adminName&&userPass===adminPass){
    console.log ("Ви успішно залогінені")
}else if(userName!==adminName&&userPass===adminPass){
    console.log ("У вас винекла проблема з логіном або паролем")
}else if(userName===adminName&&userPass!==adminPass){
    console.log ("У вас винекла проблема з логіном або паролем")
}else if (userName!==adminName&&userPass!==adminPass){
    console.log("Ви немаєте доступу до admin-панелі") 
}; */

/*******************************************************************
const money = +prompt ("Скільки грошей у Вас є?");
const watermelom = 'Кавун';
const watermelom_price = 21;
const carrot = 'Морква';
const carrot_price = 8;
const potato = 'Картопля';
const potato_price = 12;
console.log(`${watermelom} - ${watermelom_price} грн
${carrot} - ${carrot_price} грн
${potato} - ${potato_price} грн`);
const Purchase = prompt('Що б Ви хотіли купити?');

if (Purchase==carrot&&money>=carrot_price){
    let amount1= Math.floor(money/carrot_price);
    let remainder1 = money-amount1*carrot_price;
    console.log(`За ${money} грн. Ви можете придбати ${amount1} ${carrot}. У Вас залишиться ${remainder1} гривень`)
}

else if  (Purchase==potato&&money>=potato_price){
    let amount1= Math.floor(money/potato_price);
    let remainder1 = money-amount1*potato_price;
    console.log(`За ${money} грн. Ви можете придбати ${amount1} ${potato}. У Вас залишиться ${remainder1} гривень`)
}

else if  (Purchase===watermelom&&money>=watermelom_price){
    let amount1= Math.floor(money/watermelom_price);
    let remainder1 = money-amount1*watermelom_price;
    console.log(`За ${money} грн. Ви можете придбати ${amount1} ${watermelom}. У Вас залишиться ${remainder1} гривень`)
}

else if (carrot_price<money<watermelom_price){
    console.log('На жаль, у Вас недостатньо коштів для купівлі хоча б 1 шт. будь-якого продукту');
}

else if (money<watermelom_price & money<carrot_price & money<potato_price){
    console.log('На жаль, у Вас недостатньо коштів для купівлі хоча б 1 шт. будь-якого продукту');
}


*/
 const side1 = +prompt("Введіть будь ласка довжину першої сторони трикутника -")
 const side2 = +prompt("Введіть будь ласка довжину другої сторони трикутника -")
 const side3 = +prompt("Введіть будь ласка довжину третьої сторони трикутника -")
 const triangelExist = (side1>0,side2>0,side3>0)&&(side1+side2)>side3&&(side1+side3)>side2&&(side2+side3)>side1 ? "Трикутник існує": "Трикутник не існує";
 console.log(triangelExist);