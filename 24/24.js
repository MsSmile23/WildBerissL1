import Api from './components/Api.js';
import Table from './components/Table.js';
import Section from './components/Section.js';
import Item from './components/Item.js';

const tableSetting = {
  itemSelector: '#header-item',
  elementsPerPage: 50, // количество элементов на странице
  itemHeaderActiveClass: 'header__item_active',
  itemReverseClass: 'reverse',
}
const itemSetting = {
  templateSelector: '#template',
  itemSelector: '.item',
  itemFNameSelector: '.item__content[data-type="fname"]',
  itemLNameSelector: '.item__content[data-type="lname"]',
  itemTelSelector: '.item__content[data-type="tel"]',
  itemAddrSelector: '.item__content[data-type="address"]',
  itemCitySelector: '.item__content[data-type="city"]',
  itemStateSelector: '.item__content[data-type="state"]',
  itemZipSelector: '.item__content[data-type="zip"]',
}

// создание инстансов
  const api = new Api();

  const itemList = new Section(
    '#list', // селектор контейнера, для элементов таблицы
    (data) => { // инструкция
      const item = new Item(data, itemSetting);
      return item.generateItem();
    }
  );

  const paginationList = new Section(
    '#pagination', // селектор контейнера, для элементов пагинации
    (data) => { // инструкция
      const item = document.createElement('span');
      item.textContent = data;
      item.classList.add('pagination__item');

      return item;
    }
  );

  const table = new Table(
    tableSetting,
    itemList.setItem, // добавление элемента таблицы
    itemList.removeItems, // удаление элемента таблицы
    paginationList.setItem, // добавление элемента пагинации
    paginationList.removeItems, // удаление элемента пагинации
  );

// метод с fetch запросом на получение данных
api.getData()
  .then(res => table.getPagination(res, 1))

// установка слушателей таблицы
table.setEventListeners();