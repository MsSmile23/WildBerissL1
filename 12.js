// Задача на работу с объектами: создайте объект, представляющий собой книгу. 
// Объект должен иметь свойства, такие как: название книги, автор и год издания. 
// Напишите методы для получения и изменения значений свойств книги.

const book = {name: 'Lord of the Rings', 
author: 'Tolkien',
year: 1955,


// методы для значения ключей

setName: function(name) {
    if(name.length < 3) {
        return 'Слишком маленький заголовок'
    };
    this.name = name;
},
setAuthor: function(author) {
    this.author = author
},
setYear: function(year){
    this.year = year;
},

// сеттер и геттер

set published(value) {
    if (typeof value !== "number") {
      alert('pass the number');
      return
    };

    this._published = value;
  },
  get published() {
    return this._published;
  },

  // получить всю информацию
  getAllData: function() {
    return `${this.name}, ${this.author}, ${this.year}, ${this._published}`;
  },

}

console.log(book.getAllData());
book.published = 1956;
console.log(book.getAllData());