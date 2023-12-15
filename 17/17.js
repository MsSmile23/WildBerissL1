// Необходимо реализовать простое поле ввода адреса с функцией геокодинга: 
// пользователь вводит данные в поле с помощью одного из геоинформационных сервисов 
// (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. 
// Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.

// Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.

const input = document.getElementById('input');
const output = document.getElementById('output');

ymaps.ready(() => {
    const addElement = (elem) => {
      output.append(elem);
    }
  
    const createElement = (data) => {
      const item = document.createElement('div');
  
      item.textContent = data;
  
      addElement(item);
    }
  
    const geocode = (address) => {
      ymaps.geocode(address)
        .then(res => {
          console.log(res)
          if (res.geoObjects.getLength() < 1) {
            createElement('Ничего не найдено');
            return
          }
  
          res.geoObjects.each((item) => {
            createElement(item.getAddressLine());
          })
        })
    };
  
    const observeInput = () => {
      let timer;
  
      input.addEventListener('input', () => {
          clearTimeout(timer);
  
          output.innerHTML = '';
  
          timer = setTimeout(() => {
            geocode(input.value);
          }, 1500);
      });
    }

    observeInput();
  });