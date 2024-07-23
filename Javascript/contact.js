document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    
    alert('Form submitted successfully!');
});
function modes(){
    let element = document.body; 
    element.classList.toggle("dark-mode");
}