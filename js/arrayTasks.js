//                                      ЗАДАЧИ НА РАБОТУ С МАССИВАМИ В JAVASCRIPT
// Работа с concat
// 1.Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1.concat(arr2));



// Работа с reverse
// 2.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
let arr1 = [1, 2, 3];

console.log(arr1.reverse());



// Работа с push, unshift
// 3.Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);

console.log(arr1);

// 4.Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6
const arr1 = [1, 2, 3];
arr1.unshift(4, 5, 6);

console.log(arr1);



// Работа с shift, pop
// 5.Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
let arr1 = ["js", "css", "jq"];
let arrayShift = arr1.shift();

console.log(arrayShift);

// 6.Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его
let arr1 = ["js", "css", "jq"];
let arrayPop = arr1.pop();

console.log(arrayPop);



// Работа с slice
// 7.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]
let arr1 = [1, 2, 3, 4, 5];
let arrSlice = arr1.slice(0,3);

console.log(arrSlice);

// 8.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]
let arr1 = [1, 2, 3, 4, 5];
let arrSlice = arr1.slice(3);

console.log(arrSlice);



// Работа с splice
// 9.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);

console.log(arr1);

// 10. Дан массив. С помощью метода splice запишите в новый массив элементы [2, 3, 4]
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.splice(1, 3);

console.log(arr2);

// 11. Дан массив. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3,0,"a","b","c");

console.log(arr1);

// 12.Дан массив. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1,0,"a","b");
arr1.splice(6,0,"c");
arr1.splice(8,0,"e");

console.log(arr1);



// Работа с sort
// 13.Дан массив [3, 4, 1, 2, 7]. Отсортируйте его
let arr1 = [3, 4, 1, 2, 7];
arr1.sort();

console.log(arr1);



// Работа с object.keys
// 14.Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей
let object = {
  js:'test', 
  jq: 'hello', 
  css: 'world'
}

console.log(Object.keys(object));