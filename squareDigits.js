// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num) {
  // приводим к строке чтобы разбить на массив цифр
  let digits = num.toString().split('');
  // перебираем массив и каждую цифру возводим в квадрат
  let result = digits.map(digit => {
    return digit * digit; // при умножении произошла динамическая типизация (srt => num)
})
  // склеиваем и приводим к числу (метод join() возвращает строковое значение)
  return +(result.join(''));
  }

squareDigits(9119)


// Рефакторинг и второй способ приведения строки к числу

function squareDigitsB(num){
  return Number(('' + num).split('').map(function (digit) {return digit * digit;}).join(''));
  
}

squareDigitsB(9119)