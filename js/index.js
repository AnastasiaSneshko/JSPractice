// 1. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число
const arrayOfNum = [4, -2, 5, 19, -130, 0, 10];

function getMinNum (arrayOfNum) {
  let minNum = arrayOfNum[0];

  for(let i = 0; i < arrayOfNum.lenght; i++){
    if(arrayOfNum[0] < minNum){
      minNum = arrayOfNum[i];
    }
  }
  return minNum;
}

function getMaxNum (arrayOfNum) {
  let maxNum = arrayOfNum[0];

  for(let i = 0; i < arrayOfNum.lenght; i++){
    if(arrayOfNum[0] > maxNum){
      maxNum = arrayOfNum[i];
    }
  }
  return maxNum;
}


// 2. Дан массив arr = [12, 15, 20, 25, 59, 79.] Найдите среднее арифметическое его элементов
const arrayOfNum = [12, 15, 20, 25, 59, 79];

function averageOfNum (count) {
  let sum = 0;
  let count = arrayOfNum.length;

  for (i = 0; i < count; i++) {
    sum += count[i];
  }
  return sum / count;
}


// 3. Выведите на экран случайное целое число от 1 до 100 с помощью функции.
function getRandomNumber(){
  return Math.round(Math.random() * 100) + 1;
}


// 4. Заполните массив 10-ю случайными целыми числами.
let arrayOfNum = [];
for (let i = 0; i < 10; i++) {
  arrayOfNum[i] = Math.floor(Math.random() * 10);
}
console.log(arrayOfNum);