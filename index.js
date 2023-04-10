// Задание №1
let password = 'test';
let interPassword = prompt('Введите пароль');
if (password === interPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
// Задание №1 с помощью тернарного оператора.
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

// Задание №4
let a = 2;
let b = 3;
alert(a + b);

// Задание №5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        alert('Зима');
        break;
    case '3':
    case '4':
    case '5':
        alert('Весна');
        break;
    case '6':
    case '7':
    case '8':
        alert('Лето');
        break;
    case '9':
    case '10':
    case '11':
        alert('Осень');
        break;
    default:
        alert('Такого месяца не сущетвует');
        break;
}