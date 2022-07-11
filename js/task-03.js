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

images.forEach((image) => {
  const imgItem = document.createElement("li");
  imgItem.insertAdjacentHTML("afterbegin", `<img src="${image.url}" alt="${image.alt}" width="350px" />`)
  imgItem.classList.add("picStyle")
  gallery.append(imgItem)
  
})

gallery.classList.add("list")
const img = document.querySelectorAll("img")
img.classList.add("img-styles")