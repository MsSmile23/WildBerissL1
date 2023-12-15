// Задача о коллекции функций: у вас есть массив функций, напишите код, 
// который вызовет каждую функцию в этом массиве и выведет их порядковый номер. 
// Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.

// Другим выполнить следующие шаги:
// Вызвать первую функцию из массива.
// После завершения работы первой функции вызвать вторую функцию.
// После завершения работы второй функции вызвать третью функцию.
// И так далее, пока все функции в массиве не будут вызваны по порядку.


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

arrayFunct.forEach((func, index) => {
    console.log(`Функция №${index+1}: ${func()}`);
})