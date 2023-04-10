// // Задание №1
let password = 'test';
let interPassword = prompt('Введите пароль');
if (password === interPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
// // Задание №1 с помощью тернарного оператора.
let password1 = 'test';
let interPassword1 = prompt('Введите пароль');
password1 === interPassword1 ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

// Задание № 2
let c = 5;
(c>0 && c<10)? alert('Верно') : alert('Не верно');

// Задание №3
let d = 113;
let e = 15;
(d>100 || e>100)? alert('Верно') : alert('Не верно');