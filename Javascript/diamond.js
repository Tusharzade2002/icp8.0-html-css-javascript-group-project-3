
function enableDark(){
   const mainBody= document.getElementById("main-body")
   mainBody.classList.remove("bg-light")
   mainBody.classList.add("bg-dark")
}

function enableLight(){
    const mainBody= document.getElementById("main-body")
   mainBody.classList.remove("bg-dark")
   mainBody.classList.add("bg-light")
}
