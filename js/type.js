


// let user = new Object{};

// объект
let user = {
    // ключи объекта
    name: 'Вася',
    age: 30,
    "pets name":  'Барсик'
};

// выводим объект и его ключ name
console.log(user.name);

// выводим объект и его ключ из нескольких строк
console.log(user['pets name']);

// добавить ключ в оюъект
user.surname = 'Пупкин';

console.log(user);


// удаление ключа в объекте
delete  user.surname;

console.log(user);


// добавление через переменную
let fruit = 'lemon'; 
let shop = {
    [fruit] : 10,
    potato: 5,
    banana: 12
}
console.log(shop.lemon);


// проверка на наличие ключа в объекте
console.log('potato' in shop);


// цикл for для объекта (перебор ключей в массиве)
for(let key in shop){
    console.log(key, shop[key]);
}

// копирование данных
let a = 5;
let b = a;


// правильное копирование для объектов
let admin = {
    name: 'admin'
}
let prov = {};

for (let data in admin){
    prov[data] = admin[data];
}

prov.age = 10;
console.log(admin);


// так же есть встроенный метод
Object.assign(admin,prov);


// функция внутри объекта
let place = {
    name: 'Place',
    sayHi(){
        alert(`Hi ${this.name}`);
    }
}

place.sayHi();


// вывод первого символа
let str = 'Привет мир!';
console.log(str[0]);

// вывод последнего символа
console.log(str.at(-1));

// вывод последнего символа
console.log(str[str.length - 1]);

// цикл for для массивов
for (let letter of str){
    console.log(letter);
}

// строка к нижнему или верхнему регистру
console.log(str.toUpperCase);
console.log(str.toLowerCase);


// 1 символ в строке к нижнему или верхнему регистру
console.log(str[0].toUpperCase);
console.log(str[0].toLowerCase);

// нахождение позиции символа в строке
console.log(str.indexOf['e']);

console.log(str.includes('ри')); //true


// вырезаем значение 
let substr = str.slice(0,2);
//let substr = str.substring(2,0); 
console.log(substr);


// практика

// 1 задание
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user); 


// 2 задание

let salaries = { 
    John: 100, 
    Ann: 160, 
    Pete: 130 
};

let sum = Object.values(salaries).reduce((acc, current) => acc + current, 0);
