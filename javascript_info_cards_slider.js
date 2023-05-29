const previous = document.getElementById ('prev');
const next = document.getElementById ('next');
const lists = document.getElementById ('sliderHold').children;
const allLists =  lists.length;
let index = 0;

previous.addEventListener('click', () => {
    nextImage('next');
})

next.addEventListener('click', () => {
    nextImage('prev')
})

//Changes the pricing list on click

function nextImage(direction) {
    if(direction == 'next' ) {
        index++;
        if(index == allLists) {
            index = 0;
        }
    } else {
        if(index == 0) {
            index = allLists - 1;
        } else {
            index--;
        }
    }
        
    //Gives the class "main" to the list that must be shown

    for(let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('main');
    }
    lists[index].classList.add('main');
}