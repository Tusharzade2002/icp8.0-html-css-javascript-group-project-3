function sliderimg(){
   let random = Math.floor(Math.random() * 4);
   // console.log(random);
   Images.src=Images[random];
}
function modes(){
   let element = document.body;
   element.classList.toggle("dark-mode");
}
