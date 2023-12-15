// Задача на модули и использование внешних библиотек: напишите модуль, 
// который экспортирует функцию для работы с датами. 
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.


export default class MomentDate {
    getDate(day, month, year) {
        if(!(day, month, year)) return moment().format('DD.MM.YYYY');
        return moment(`${day}/${month}/${year}`, 'DD.MM.YYYY').format('DD.MM.YYYY')
    }
}


const newmomet = new MomentDate();

console.log(newmomet.getDate());
console.log(newmomet.getDate(12,12,2023));