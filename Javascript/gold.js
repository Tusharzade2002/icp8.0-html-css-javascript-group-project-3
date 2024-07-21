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
let Image=document.getElementById("image-slider");
let Images=['./../Images/image/Slider 1.webp','./../Images/image/slider2.webp','./../Images/image/slider3.webp','./../Images/image/Slider4.webp'];
    
    setInterval(sliderimg, 3000);

   function sliderimg(){
        let random = Math.floor(Math.random() * 4);
        // console.log(random);
        Images.src=Images[random];
    }