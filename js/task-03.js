const gallery = document.querySelector(".gallery")


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//  images.forEach((image) => {
//   gallery.insertAdjacentHTML("beforeend", `<li class="picStyle"><img class="img-styles" src="${image.url}" alt="${image.alt}" width="350px" /></li>`)  
// })
// коли таким методом ставлю afterbegin картинки чогось стають у зворотньому порядку, з чим це пов'язано?

const pictureArr = images.map(({ url, alt }) => {
  return `<li class="picStyle"><img class="img-styles" src='${url}' alt='${alt}' width="350px" /></li>`
}).join(" ");
console.log(pictureArr);

gallery.classList.add("list")
gallery.insertAdjacentHTML("afterbegin", pictureArr)
