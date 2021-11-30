function moremenu() {
    document.querySelector('.category-menu').classList.toggle('more')
    document.querySelector('.imgmore').classList.toggle('show')
}


function slidesPlugin(activeSlide = 2) {
    const slides = document.querySelectorAll('.slide')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.toggle('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {

        })
    }
}

slidesPlugin()


let tit = document.querySelector('title');


let newElement = document.createElement('span')
let parent = document.querySelector('.path');
parent.append(newElement);
newElement.textContent = tit.textContent;



var modal = document.getElementById('id01');


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




