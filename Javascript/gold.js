let Image=document.getElementById("image-slider");
let Images=['./../Images/image/Slider 1.webp','./../Images/image/slider2.webp','./../Images/image/slider3.webp','./../Images/image/Slider4.webp'];
    
    setInterval(sliderimg, 3000);

   function sliderimg(){
        let random = Math.floor(Math.random() * 4);
        // console.log(random);
        Images.src=Images[random];
    }

const quantityElements = document.querySelectorAll('.quantity');
quantityElements.forEach((element) => {
    let quantity = parseInt(element.innerText);
    element.nextElementSibling.addEventListener('click', () => {
        ChangeQuantity(element, 'inc');
      });
      element.previousElementSibling.addEventListener('click', () => {
        ChangeQuantity(element, 'dec');
      });
    });

  function ChangeQuantity(quantityElement, op) {
    let quantity = parseInt(quantityElement.innerText);

            if (quantity == 1 && op == "dec"){
            alert('quantity cannot be less than 1')
                return
            }
            else if (quantity == 5 && op == "inc"){
            alert('quantity cannot be more than 5')
                return
            }
                quantityElement.innerText = op ==='inc' ? ++ quantity : --quantity;
        }