const list = document.querySelector('#list');
const btn = document.querySelector('#btn');

// Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент,
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.


const createElement = (tag, attr, style) => {
  const element = document.createElement(tag);

  
  return Object.assign(element, attr, style);
}

const createItem = () => {
  const item = createElement('li', {

    ariaLabel: 'Просто текст, чтобы показать, что можно ещё атрибуты добавлять',
  }, {
    style: 'display: block; width: 100px; height: 100px',
  });

  item.style.backgroundColor = 'inherit';
  item.style.border = '40px solid rgb(213 91 155)';

  const mount = (container) => {
    container.append(item);
  };

  return { mount }
}

btn.addEventListener('click', () => {
  createItem().mount(list);
})