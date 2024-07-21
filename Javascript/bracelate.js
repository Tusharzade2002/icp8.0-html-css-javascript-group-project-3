function likeItem(button){
    const span = button.querySelector('span');
    let count = parseInt(span.textContent);

    if (button.classList.contains('liked')){
        count--;
        button.classList.remove('liked');
    } else {
        count++;
        button.classList.add('liked');
    }

    span.textContent = count;
}