const fontControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


function changeFont(event) {
    // let num = Number(fontControl.valueAsNumber) + 'px';
    text.style.fontSize = event.currentTarget.value + 'px';
    // console.log(num);
}

fontControl.addEventListener("input", changeFont)
console.dir(fontControl);