<div class="theme-selector-container">

<img src="./../Images/Icon/full-moon.png" class="theme-select-icon" onclick="enableDark()"/>

</div>

function enableDark(){
    const mainbody = document.getElementById("main-body")
    mainbody.classList.remove("bg-light")
    mainbody.classList.add("bg-dark")

}

function enableLight(){
    const mainbody = document.getElementById("main-body")
    mainbody.classList.remove("bg-dark")
    mainbody.classList.add("bg-light")
}