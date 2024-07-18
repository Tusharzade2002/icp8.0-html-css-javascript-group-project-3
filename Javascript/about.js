function modes(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function changes(action){
            const qualityElement = document.getElementById("qualitytext");
            let quality = parseInt(qualityElement.innerText)
            if(quality==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement.innerText=action == 'inc' ? ++quality : --quality
             
        }