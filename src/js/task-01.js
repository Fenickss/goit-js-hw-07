const item = document.querySelectorAll('.item')
console.log(`Количество категорий ${item.length}`);

const categoryEnumeration = (items) => {
  items.forEach(obj => {
    let item = {
      'Категория': obj.querySelector('h2').textContent,
      'Количество': obj.querySelectorAll('ul li').length
    }
    console.log(item);
  });
} 
categoryEnumeration(item);