function toggleDropdown() {
    const pageSelect = document.getElementById('page-select');
    if (pageSelect.classList.contains('hidden')) {
      pageSelect.classList.remove('hidden');
      pageSelect.style.display = 'block';
    } else {
      pageSelect.classList.add('hidden');
      pageSelect.style.display = 'none';
    }
  }
  
  function redirectToPage() {
    const pageSelect = document.getElementById('page-select');
    const selectedPage = pageSelect.value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  }
  

function modes(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}
function changeimg(imgname){
    const mainimage = document.getElementById('main-image');
    mainimage.src=imgname;
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
        function changes1(action){
            const qualityElement1 = document.getElementById("qualitytext1");
            let quality1 = parseInt(qualityElement1.innerText)
            
            if(quality1==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality1==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement1.innerText=action == 'inc' ? ++quality1 : --quality1
        }
        function changes2(action){
            const qualityElement2 = document.getElementById("qualitytext2");
            let quality2 = parseInt(qualityElement2.innerText)
            if(quality2==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality2==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement2.innerText=action == 'inc' ? ++quality2 : --quality2
        }
        function changes3(action){
            const qualityElement3 = document.getElementById("qualitytext3");
            let quality3 = parseInt(qualityElement3.innerText)
            if(quality3==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality3==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement3.innerText=action == 'inc' ? ++quality3 : --quality3
             
        }
        function changes4(action){
            const qualityElement4 = document.getElementById("qualitytext4");
            let quality4 = parseInt(qualityElement4.innerText)
            if(quality4==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality4==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement4.innerText=action == 'inc' ? ++quality4 : --quality4  
        }
        function changes5(action){
            const qualityElement5 = document.getElementById("qualitytext5");
            let quality5 = parseInt(qualityElement5.innerText)
            if(quality5==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality5==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement5.innerText=action == 'inc' ? ++quality5 : --quality5
        }
        function changes6(action){
            const qualityElement6 = document.getElementById("qualitytext6");
            let quality6 = parseInt(qualityElement6.innerText)
            if(quality6==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality6==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement6.innerText=action == 'inc' ? ++quality6 : --quality6
             
        }
        function changes7(action){
            const qualityElement7 = document.getElementById("qualitytext7");
            let quality7 = parseInt(qualityElement7.innerText)
            if(quality7==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality7==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement7.innerText=action == 'inc' ? ++quality7 : --quality7
        }
        function changes8(action){
            const qualityElement8 = document.getElementById("qualitytext8");
            let quality8 = parseInt(qualityElement8.innerText)
            if(quality8==1 && action=='dec'){
                alert('Quantity cannot be less than 1')
                return
            }
            else if(quality8==5 && action=='inc'){
                    alert('Quantity cannot be greater than 5')
                    return
            }
            qualityElement8.innerText=action == 'inc' ? ++quality8 : --quality8
             
        }