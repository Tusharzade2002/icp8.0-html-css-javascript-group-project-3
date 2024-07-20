let Image=document.getElementById("image-slider");
let Images=['./../Images/image/Slider 1.webp','./../Images/image/slider2.webp','./../Images/image/slider3.webp','./../Images/image/Slider4.webp'];
    
    setInterval(sliderimg, 3000);

   function sliderimg(){
        let random = Math.floor(Math.random() * 4);
        // console.log(random);
        Images.src=Images[random];
    }

    const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);

        function ChangeQuantity(op) {

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