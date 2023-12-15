// Реализовать функцию конвертации JSON в строку

const convert = (el) => {
    if(typeof el === 'string') {
        return el
    }
    return JSON.stringify(el)
}

console.log(convert({ name: 'Brian', age: 19, }));

