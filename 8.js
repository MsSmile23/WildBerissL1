// Задача о замыканиях: напишите функцию, которая будет принимать массив 
//функций и возвращать новую функцию, которая вызывает каждую функцию в 
//этом массиве и возвращает массив результатов, полученных после вызова каждой функции.


const arrayFunct = [
    func1 = () => {
        return 'Привет'
    },
    func2 = () => {
        return 'Мой старый друг'
    },
    func3 = () => {
        return 'Бендер Сгибатель Радригес'
    }
]

const callfunct = (arr) => {
    const newfunc =() => {return arr.map(func => func())}
    return newfunc()
}

console.log(callfunct(arrayFunct));