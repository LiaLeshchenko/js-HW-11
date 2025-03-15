// 1. Створіть об'єкт "bankAccount" з 
// властивостями "ownerName", "accountNumber",
//     "balance".Додайте до об'єкту метод "deposit",
//      який дозволяє додавати гроші на рахунок, та метод
// "withdraw", який дозволяє знімати гроші з рахунку.
// Використайте cofirm() щоб поповнити рахунок або 
// отримати готівку та prompt() щоб дізнатися сумму.
// Після проведення операції виводити повідомлення про
//  залишок на рахунку. 

// const bankAccount = {
// ownerName: "Liya Leshchenko",
// accountNumber: "UA123",
// balance: 100000000000000,

// deposit() {
// if (confirm("Ви хочете поповнити рахунок?")) {
// let amount = parseFloat(prompt("Введіть суму для поповнення:"));
//     if (!isNaN(amount) && amount > 0) {
//         this.balance += amount;
//         alert
//             (`Ваш рахунок поповнено на ${ amount } грн.`) (`Залишок: ${ this.balance } грн.`);
// } else {
// alert("Некоректна сума.");
//         }
//     }
// },



//     withdraw() {

//         if (confirm("Хочете зняти гроші?")) {
//             let amount = parseFloat(prompt("Введіть суму для зняття:"));
//             if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
//                 this.balance -= amount;
//                 alert(`Ви зняли" ${ amount } грн.`)(`Залишок: ${this.balance} грн.`);
//             } else {
//                 alert("Недостатньо коштів або некоректна сума.");
//             }
//         }
// },
// };
// bankAccount.deposit();
// bankAccount.withdraw();



// 2. Створіть об'єкт ""weather"" з властивостями ""temperature"", ""humidity"", ""windSpeed"". Додайте до об'єкту метод, який повертає ""true"",
//якщо температура нижче 0 градусів Цельсія, та ""false"", якщо температура вище або рівна 0 градусів Цельсія.
//Температуру потрібно отримати з prompt().Якщо метод повернув ""true"" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

// const weather = {
// temperature: 0,
// humidity: 30,
// windSpeed: 10,

// freezing() {
// this.temperature = parseFloat(prompt("Введіть температуру (°C):"));
// if (!isNaN(this.temperature)) {
// if (this.temperature < 0) {
// alert("Температура нижче 0 градусів Цельсія");
// return true;
// } else {
// alert("Температура вище або рівна 0 градусів Цельсія");
// return false;
// }
// } else {
// alert("Некоректне значення температури.");
// return null;
// }
// },
// };
// weather.freezing();



// 3. Створіть об’єкт ""user"", який буде мати властивості ""name"", ""email"", ""password"".Додайте метод ""login"",

//     який буде перевіряти правильність введеного email та password.

// const user = {
// name: "Liya Leshchenko",
// email: "liya",
// password: "12345",

// login() {
// let inputEmail = prompt("Введіть ваш email:");
// let inputPassword = prompt("Введіть ваш пароль:");
// if (inputEmail === this.email && inputPassword === this.password) {
// alert("Вхід успішний!, " + this.name + "!");
// } else {
// alert("Неправильний email або пароль. Спробуйте ще раз.");
// }
// },
// };
// user.login();



// 4. Створіть об'єкт ""movie"" з властивостями ""title"", ""director"", ""year"", ""rating"".

//  Додайте до об'єкту метод, який повертає ""true"", якщо рейтинг фільму вище 8, та ""false"",

//   якщо рейтинг фільму 8 або нижче.Вивести значення властивостей в консоль.

// const movie = {

//   title: "fast and furious",

//   director: "Liya Leshchenko",

//   year: "1987",

//   rating: "10",

// isRaiting() {
// return this.rating > 8;
// },
// };
// console.log("Назва:", movie.title);
// console.log("Рейтинг:", movie.rating);
// console.log("Режисер:", movie.director);
// console.log("Рік випуску:", movie.year);
// console.log("Фільм має високий рейтинг?", movie.isRaiting());



// 5. Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price,

//     image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.
// const productName = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
// productName,
// price,
// image,
// tags,
// };console.log(product);



// 6
// Використовуючи синтаксис обчислювальних властивостей,
// доповни код оголошення об'єкта credentials таким чином,
// щоб в результаті у нього були дві властивості:
// email і password, ключі яких зберігаються у змінних
// emailInputName і passwordInputName.
// Значенням власт email повинен бути рядок "henry.carter@aptmail.com",
// а значенням властивості password - рядок "jqueryismyjam".
// const emailInputName = "email";
// const passwordInputName = "password";

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials);