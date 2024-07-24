document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('item-form');
    const billTableBody = document.getElementById('bill-table-body');
    const totalAmount = document.getElementById('total-amount');

    let items = []; 

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const itemName = document.getElementById('item-name').value;
        const itemQuantity = parseInt(document.getElementById('item-quantity').value);
        const itemPrice = parseFloat(document.getElementById('item-price').value);

        if (itemName && itemQuantity && itemPrice) {
            const newItem = {
                name: itemName,
                quantity: itemQuantity,
                price: itemPrice
            };
            items.push(newItem);
            renderBill();
            form.reset();
        }
    });

    function renderBill() {
        billTableBody.innerHTML = '';
        let totalPrice = 0;
        items.forEach(function(item) {
            const totalItemPrice = item.quantity * item.price;
            totalPrice += totalItemPrice;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${totalItemPrice.toFixed(2)}</td>
            `;
            billTableBody.appendChild(row);
        });

        totalAmount.textContent = totalPrice.toFixed(2);
    }
});


function modes(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}