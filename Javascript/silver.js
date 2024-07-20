function likeItem(button) {
    let likeCount = button.querySelector('span');
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
}
