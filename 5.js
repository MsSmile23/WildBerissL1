const arrayExample = [
    { name: 'John', age: 25, },
    { name: 'Brian', age: 19, },
    { name: 'Eva', age: 27, },
    { name: 'Sara', age: 19, },
    { name: 'Alex', age: 19, },
    { name: 'Ethan', age: 19, },
    { name: 'Derek', age: 41, },
  ];
  
const json = JSON.stringify(arrayExample);
  
class LinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
      }
  
      append = (value) => {
        const newNode = {
          value: value,
          next: null,
        };
  
        if (!this.head || !this.tail) {
          this.head = newNode;
          this.tail = newNode;
  
          return this;
        }
  
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      getList = () => {
        return this.head;
      }
}
  
    const convertJsonToLinkedList = (json) => {
      const list = JSON.parse(json);
      const linkedList = new LinkedList();
  
      if (!(Array.isArray(list) && list.length > 0)) return 'not an array was passed or the array is empty'
  
      list.forEach(obj => linkedList.append(obj));
  
      return linkedList.getList();
    }
  
console.log(convertJsonToLinkedList(json));