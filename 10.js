// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

const convert = (val) => {
    if(typeof val === 'function' || typeof val === 'symbol' || typeof val === undefined) {
        return 'Была передана неправильная информация. Пожалуйста, не используйте символы, функции или пустую строку'
    } else if (typeof val === 'string'){
        return `"${val.trim()}"`
    } else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
        return String(val);
    } else if (Array.isArray(val)) {
        return `[${val.map(el => convert(el)).join(',')}]`
    } else if (typeof val === 'object') {
        const arr = [];
        for (key in val) {
            arr.push(`"${key}": ${convert(val[key])}`)
        }
        return `{${arr.join(',')}}`
    }
}

console.log(convert({ name: 'Brian', age: 19, }));
console.log(convert('Черт'));
console.log(convert(20));
