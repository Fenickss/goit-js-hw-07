const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];







// const ulList = document.querySelector('#ingredients')

// const ulLi = (arr) => {
//   arr.forEach(e => {
//     const liElem = document.createElement('li')
//     liElem.textContent = e
//     ulList.append(liElem)
//   });
// }

// ulLi(ingredients)



const ulEl = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

ulEl.innerHTML = list;