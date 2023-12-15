// Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию. 
// Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции, 
// даже после того, как внешняя функция завершила свое выполнение.

const outer = () => {
    const log = 'Привет мои чуваки!'
    const inner = (el) => {
        return `${log} ${el}`
    }
    return inner
}

const newfunct  = outer();
console.log(newfunct('Поехали!'));

