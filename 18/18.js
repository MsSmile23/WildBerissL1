// Подсчитать максимальный объем данных, который можно записать в `localStorage` вашего браузера.

const btnAdd = document.querySelector('#add');
const countSize = document.querySelector('#size');

const calculateSpaceLocalStorage = () => {
    let value = 'a';
  
    localStorage.clear();
  
    while (true) {
      try {
        localStorage.setItem('', value);
        value += value;
      } catch {
        break
      }
    }
  
    return Math.floor((value.length / 2) * 2);
  }
  
  btnAdd.addEventListener('click', () => {
    const byte = calculateSpaceLocalStorage();
    const mb = (byte / 1048576).toFixed(1);
  
    localStorage.clear();
  
    countSize.textContent = `${byte} Byte || ${mb} Mb`; 
  })