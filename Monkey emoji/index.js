const closedEmoji = document.querySelector('.closed');
const openEmoji = document.querySelector('.open');


closedEmoji.addEventListener('click',() =>{
    if(openEmoji.classList.contains('open')){
        openEmoji.classList.add('active');
        closedEmoji.classList.remove('active');
    }
});

openEmoji.addEventListener('click',() =>{
    if(closedEmoji.classList.contains('closed')){
        closedEmoji.classList.add('active');
        openEmoji.classList.remove('active');
    }
});


/* The classList property returns the class name(s) of an element, as a DOMTokenList object.
   This property is useful to add, remove and toggle CSS classes on an element.
   The classList property is read - only, however, you can modify it by using the add() and remove() methods. */
