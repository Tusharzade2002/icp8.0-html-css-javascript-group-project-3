function handleQuantity(action){
    const quantityElement = document.getElementById("quantity-text")
    let quantity = parseInt(quantityElement.innerText);
    if(quantity==1 && action=='decrement')
{
    alert('Quantity can`t be less than 1')

}else if(quantity==5 && action=='increment')
{
    alert('Quantity can`t be more than 5')
}

    quantityElement.innerText = action=='increment' ? ++quantity:--quantity
    }