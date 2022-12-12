// 1. Написать программу, которая будет имитировать счет в банке, сначала пользователю предлагается внести сумму на депозит(сумма должна быть положительной), затем необходимо спросить у пользователя, хочет ли он пойти за покупками, если нет, вывести сообщение типа: До встречи! Если он выберет вариант покупок, тогда необходимо запросить информацию о том, какой продукт он хочет купить и сколько он стоит(макс 3 продукта), продукты сохранить в отдельный объект в формате(название продукта: цена), также необходимо отнять стоимость продуктов от счета в банке, необходимо проверить достаточно ли средств, если средств недостаточно вывести ошибку. В конце работы программа должна распечатать объект с покупками и оставшуюся сумму на счете


// let per = +prompt('Внесите сумму на депозит');
// let bankAccount = per;
// if (per >= 0){
//     let con = confirm('Хотите ли вы сделать покупку')
//     if (con !== true) {
//         alert('До встречи!')
//     }
//     let milk  = prompt('milk: price ?');
//     let potato = prompt('potato: price ?');
//     let meat = prompt('meat: price ?');
//     let obj = {};
//     obj.milk = milk;
//     obj.potato = potato;
//     obj.meat = meat;
//     console.log(obj);
//     let ostatok = bankAccount - (+obj.milk) - (+obj.potato) - (+obj.meat);
//     if (bankAccount < (+obj.milk) + (+obj.potato) + (+obj.meat)) {
//         console.log('Недостаточно средства');
//     } else {
//         console.log(bankAccount- (+obj.milk) - (+obj.potato) - (+obj.meat));
//         alert(`Ваши покупки milk:${+obj.milk}, potato:${obj.potato}, meat:${obj.meat},  ostatok  ${ostatok}`)
//     }
// } 

// ================================================================================================================================================

// 2. Реализовать калькулятор(+, -, *, /), запросить у пользователя 2 числа и операцию, которую нужно произвести, обработать вариант того, что на ноль делить нельзя
// let num1 = +prompt('Введите число');
// let num2 = +prompt('Введите число');
// let sym = prompt('Введите +, -, *, /')
// let result;
// switch (sym) {
//     case '+':
//       console.log(num1 + num2);
//       break;
//     case '-':
//       console.log(num1 - num2);

//       break;
//     case '*':
//       console.log(num1 * num2);
//       break;
//     case '/':
//     if (num1 == 0 || num2 == 0){
//         alert('на ноль делить нельзя')
//     }else{
//         console.log(num1/num2); 
//     }
//     break
// };

// ================================================================================================================================================

// / 3. Запросить у пользователя имя, возраст, профессию, хобби, сохранить данные в объект, распечатать результат, данные необходимо заросить одним промптом


// let data = prompt('Введите ваше имя, возраст, проффесию, хобби');
// let obj = data.split(' ');

// let obj2 ={};

// obj2.name = obj[0]
// obj2.age = obj[1]
// obj2.profession = obj[2]
// obj2.hobby = obj[3]
// console.log(obj2);

// ================================================================================================================================================

// 4. Запросить у пользователя информацию для регистрации(логин, пароль, подтверждение пароля), проверить пароли на совпадение, если не совпадают вывести сообщение типа: Пароли не совпадают; также длинна пароля должна быть не менее 6ти символов и не может состоять из пробелов, сохранить данные в объект(подтверждение пароля не нужно сохранять), также по умолчанию добавить объекту ключ isAuth: false; после регистрации предложить пользователю авторизацию на сайте, если согласен, то запросить у него логин и пароль, сверить их с данными из объекта, если все совпадает, то необходимо поменять значение ключа isAuth на true;

// let username = prompt('enter your login');
// const pass = prompt('enter your password');
// let passCon = prompt('confirm your password');

// let obj;


// if (pass === passCon && pass.trim().length >=6 && pass.trim()){
//      obj = {username, pass, isAuth: false }  
// } else {
//     alert('Ошибка')
// }
// let auth = confirm();
// if (auth){
//     let login2 = prompt();
//     let pass2 = prompt();
//     if (pass2 === obj.pass && login2 == obj.username){
//         obj.isAuth = true;
//     console.log(obj); 
//     } else {
//         alert('Данные не совпадают')
//     }
// }

// ================================================================================================================================================

// 5. Дан объект: 
// {
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//     }
// }, запросить у пользователя информацию о том, какой ключ он хочет изменить и значение на которое нужно менять данные под этим ключом, учесть, что есть вложенный объект --------------// obj.key == obj[‘key’]-------------------


// let obj = {
//         username: 'Tom',
//         age: 35,                                   
//         work: 'IT',
//         pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//         }
//     }
// let auth = prompt();
// switch(auth){
//     case 'username':
//         let username = prompt();
//         obj.username = us;
//         break;
//     case 'age':
//         let age = prompt();
//         obj.age = age;
//         break; 
//     case 'work':
//         let work = prompt();
//         obj.work = work;
//         break;
//     case 'type':
//         let type = prompt();
//         obj.pet.type = type;
//         break;
//     case 'name':
//         let namepet = prompt();
//         obj.pet.type = namepet;
//         break;
//     case 'color':
//         let color = prompt();
//         obj.pet.color = color;
//         break;
//     case `pet age`:
//         let age2 = prompt();
//         obj.pet.age = age2;
//     }
//     console.log(obj);

// ================================================================================================================================================

// 6. Дан объект с продуктами:
// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
// }, запросить у пользователя одним промптом какие продукты он хочет приобрести, затем вывести сообщение с конечной суммой заказа


// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
//     }

//     let order = prompt('Введите названия продуктов, которые вы хотите приобрести, через запятую:');
//     let orderArr = order.split(', ');

//     let total = 0;

//     if (products.hasOwnProperty(orderArr[0])) {
//     total += products[orderArr[0]];
//     }
//     if (products.hasOwnProperty(orderArr[1])) {
//     total += products[orderArr[1]];
//     }
//     if (products.hasOwnProperty(orderArr[2])) {
//     total += products[orderArr[2]];
//     }
//     if (products.hasOwnProperty(orderArr[3])) {
//     total += products[orderArr[3]];
//     }
//     if (products.hasOwnProperty(orderArr[4])) {
//     total += products[orderArr[4]];
//     }
//     if (products.hasOwnProperty(orderArr[5])) {
//     total += products[orderArr[5]];
//     }

//     console.log(`Сумма заказа составит ${total}`);

// ================================================================================================================================================

// 7. Запросить у пользователя 3 числа одним промптом, сохранить все числа в разные переменные, затем вывести их разность


// let number = prompt('123').split('');
// let res=+number[0];
// let res1=+number[1];
// let res2=+number[2]
// console.log(res-res1-res2);

// ================================================================================================================================================

// 8. Запросить у пользователя 2 числа, и вывести их произведение, если одно из чисел 0, то вывести сообщение типа: При умножении на 0, любое число будет 0


// let num = prompt('Введите число');
// let num1 = prompt('Введите число');
// if (num ==0 || num1 ==0){
//     alert('При умножении на ноль 0 любое число будет 0')
// } else {
//     alert((+num)*(+num1))
// }

