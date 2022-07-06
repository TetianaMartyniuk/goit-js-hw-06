const categories = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${categories.length}`);
categories.forEach((elem) => {
    return console.log(`Category: ${elem.querySelector('h2').textContent} 
    Element: ${elem.querySelectorAll('li').length}}`)
})
