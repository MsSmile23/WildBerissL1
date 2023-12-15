//Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
//Напишите код, который сортирует этот массив по возрастанию возраста, 
//а при равных возрастах сортирует по алфавиту по полю name.

const arrayExample = [
    { name: 'John', age: 25, },
    { name: 'Brian', age: 19, },
    { name: 'Eva', age: 27, },
    { name: 'Sara', age: 19, },
    { name: 'Alex', age: 19, },
    { name: 'Ethan', age: 19, },
    { name: 'Derek', age: 41, },
];

const arraysort = (arr) => {
    return arr.sort((a, b) => {
        if(a.age === b.age){
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              return 0;
        } else {
           return a.age - b.age
        }
    })
}

console.log(arraysort(arrayExample));