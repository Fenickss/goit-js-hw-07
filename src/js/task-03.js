const images = [
  {
    url: 'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'sand drawing',
  },
];


// const gallery = document.querySelector("#gallery");
// gallery.classList.add("gallery");

// const makeGalleryItemMarkup = (image) => {
//   const { url, alt } = image;
//   return `
//   <li class="gallery-item">
//    <img src= ${url} alt= ${alt} ></img>
//   </li >`;
// };

// const makeGalleryMarkup = images.map(makeGalleryItemMarkup).join("");

// console.log(makeGalleryMarkup);

// gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup);





const ulEl = document.querySelector('#gallery');

// const image = images.reduce(
//   (string, item) => string + `<img src = "${item.url}" alt = "${item.alt}"  width = "150" height = "100" />`,
//   ""
// );
// ulEl.innerHTML = image;
images.forEach(el => {
  ulEl.insertAdjacentHTML(
    'afterbegin',
    `<li><img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" /></li>`,
  );
});
