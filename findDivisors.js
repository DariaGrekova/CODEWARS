// Create a function named divisors/Divisors that takes an n n > 1 and returns an array with all of the n's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(n) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


function divisors(n) {
  // преобразуем число в массив чисел от 1 до n
  const numbers = Array.from({length: n}, (v, k) => k + 1);
  // создаем массив для результата
  let result = [];
  // перебираем массив чисел, на каждой итеррации проверяем, что счетчик - делитель, не равен исходному числу, не равен 1
  numbers.forEach(i => {  
    if (n % i === 0 && i !== n && i !== 1) {
      // при выполнении условия записываем значение счетчика в массив
      result.push(i);
    }
  });
  // если массив пуст, присвоить переменной строковое значение
  if (result.length === 0) {
      result = `${n} is prime`;
  }   

  return result;
}

divisors(15);
divisors(13);


// вариация с циклом for и тернарным оператором
function divisorsB(n) {
  let result = [];
  for(i = 2; i < n; i++) {
    if(n % i == 0) {
      result.push(i);
    }
  }
  return result.length > 0 ? result : n + " is prime";
}

divisorsB(15);
divisorsB(13);