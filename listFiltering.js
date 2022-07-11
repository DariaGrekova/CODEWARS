// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
  // filter_list([1,2,'a','b']) == [1,2]
  // filter_list([1,'a','b',0,15]) == [1,0,15]
  // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(list) {
  // создаем пустой массив
  const filterList = [];
    // перебираем аргумент
    list.forEach(item => {
      // если тип элемента - число, то записываем элемент в созданный массив
      if (typeof(item) === 'number') {
        filterList.push(item)
      }
    });
  return filterList;
}


// вариация с методом filter()
function filter_list(list) {
  return list.filter(function(item) {
    return typeof item === 'number';
  });
}