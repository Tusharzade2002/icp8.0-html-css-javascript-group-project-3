
function modes(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function handleQuantity(action){
    const quantityElement = document.getElementById("quantity-text")
   
    let quantity = parseInt(quantityElement.innerText);
    if(quantity==1 && action=='decrement')
{
    alert('Quantity can`t be less than 1')

}else if(quantity==5 && action=='increment')
{
    alert('Quantity can`t be more than 5')
}

    quantityElement.innerText = action=='increment' ? ++quantity:--quantity
    }

    function handleQuantity1(action){
        const quantityElement1 = document.getElementById("quantity-text1")
       
        let quantity1 = parseInt(quantityElement1.innerText);
        if(quantity1==1 && action=='decrement')
    {
        alert('Quantity can`t be less than 1')
    
    }else if(quantity1==5 && action=='increment')
    {
        alert('Quantity can`t be more than 5')
    }
    
        quantityElement1.innerText = action=='increment' ? ++quantity1:--quantity1
        }

        function handleQuantity2(action){
            const quantityElement2 = document.getElementById("quantity-text2")
           
            let quantity2 = parseInt(quantityElement2.innerText);
            if(quantity2==1 && action=='decrement')
        {
            alert('Quantity can`t be less than 1')
        
        }else if(quantity2==5 && action=='increment')
        {
            alert('Quantity can`t be more than 5')
        }
        
            quantityElement2.innerText = action=='increment' ? ++quantity2:--quantity2
            }

            function handleQuantity3(action){
                const quantityElement3 = document.getElementById("quantity-text3")
               
                let quantity3 = parseInt(quantityElement3.innerText);
                if(quantity3==1 && action=='decrement')
            {
                alert('Quantity can`t be less than 1')
            
            }else if(quantity3==5 && action=='increment')
            {
                alert('Quantity can`t be more than 5')
            }
            
                quantityElement3.innerText = action=='increment' ? ++quantity3:--quantity3
                }

                function handleQuantity4(action){
                    const quantityElement4 = document.getElementById("quantity-text4")
                   
                    let quantity4= parseInt(quantityElement4.innerText);
                    if(quantity4==1 && action=='decrement')
                {
                    alert('Quantity can`t be less than 1')
                
                }else if(quantity4==5 && action=='increment')
                {
                    alert('Quantity can`t be more than 5')
                }
                
                    quantityElement4.innerText = action=='increment' ? ++quantity4:--quantity4
                    }    
                    function handleQuantity5(action){
                        const quantityElement5 = document.getElementById("quantity-text5")
                       
                        let quantity5= parseInt(quantityElement5.innerText);
                        if(quantity5==1 && action=='decrement')
                    {
                        alert('Quantity can`t be less than 1')
                    
                    }else if(quantity5==5 && action=='increment')
                    {
                        alert('Quantity can`t be more than 5')
                    }
                    
                        quantityElement5.innerText = action=='increment' ? ++quantity5:--quantity5
                        }  
                        
                        function handleQuantity6(action){
                            const quantityElement6 = document.getElementById("quantity-text6")
                           
                            let quantity6= parseInt(quantityElement6.innerText);
                            if(quantity6==1 && action=='decrement')
                        {
                            alert('Quantity can`t be less than 1')
                        
                        }else if(quantity6==5 && action=='increment')
                        {
                            alert('Quantity can`t be more than 5')
                        }
                        
                            quantityElement6.innerText = action=='increment' ? ++quantity6:--quantity6
                            }    
       
                            function handleQuantity7(action){
                                const quantityElement7 = document.getElementById("quantity-text7")
                               
                                let quantity7 = parseInt(quantityElement7.innerText);
                                if(quantity7==1 && action=='decrement')
                            {
                                alert('Quantity can`t be less than 1')
                            
                            }else if(quantity7==5 && action=='increment')
                            {
                                alert('Quantity can`t be more than 5')
                            }
                            
                                quantityElement7.innerText = action=='increment' ? ++quantity7:--quantity7
                                }     
                                function modes(){
                                    let element = document.body;
                                    element.classList.toggle("dark-mode");
                                }                               