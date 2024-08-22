

function selectorOpen(e){
    e.nextSibling.nextSibling.style.display="block"
}


function valsize(e,id){

   e.parentElement.parentElement.parentElement.querySelector("button").innerHTML = e.value
   let storedProducts = JSON.parse(localStorage.getItem('ProductKey')) || [];
   for (let index = 0; index < document.getElementsByClassName("sizedall").length; index++) {
      document.getElementsByClassName("sizedall")[index].classList.remove("activesize") 
   }

     e.classList.add("activesize")

     if(storedProducts.length > 0){
      
       for (let index = 0; index < storedProducts.length; index++) {
           if (storedProducts[index].id === id) {
               // Update the count if the ID matches
                   storedProducts[index].size = e.value ; 
                  
                   break
           }    
       }
       localStorage.setItem('ProductKey', JSON.stringify(storedProducts));
     }
   for (let index = 0; index < document.getElementsByClassName("dropdown-menu-cus").length; index++) {
       const element = document.getElementsByClassName("dropdown-menu-cus")[index];
       element.style.display="none"  
   }
   
}

function dataget(Pval) {
   
    // Retrieve the list of products from localStorage
    let storedProducts = JSON.parse(localStorage.getItem('ProductKey')) || [];
    var elements = document.getElementsByClassName("myElement");

    // Loop through all elements with the class "myElement"
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
       
        let img = element.querySelectorAll("img")
        let color = element.querySelectorAll("p")[1]?.attributes[1]?.value
        let size = element.querySelector("ul").querySelector(".activesize")
       
        let price = element.querySelectorAll("p")[3]?.attributes[1]?.value
       
        var dataExample = element.getAttribute("data-product");
            
                if (Pval === dataExample) {
                    let productFound = false;
        
                    // Loop through stored products to check if the product already exists
                    for (let i = 0; i < storedProducts.length; i++) {
                        if (storedProducts[i].id === Pval) {
                           
                            // Update the count if the ID matches
                            storedProducts[i].count += 1;
                            productFound = true;
                            break;
                        }
                    }
        
                    // If the product wasn't found, add it as a new product
                   
                    if (!productFound) {
                       
                        if(size){
                         
                        storedProducts.push({ id: dataExample, count: 1, img: img[0].currentSrc, color: color, size: size.value, price: parseInt(price),staticprice: parseInt(price)});
                    }
                    else {
                        alert("First, select a size before placing your order.")
                        break
                    }
                    }

        
                    // Update localStorage with the modified list of products
                    localStorage.setItem('ProductKey', JSON.stringify(storedProducts));
                    break; // Exit the loop after updating the product
                }

               
           
            
        
    }
    if(JSON.parse(localStorage.getItem('ProductKey')).length >0){
        let value =  JSON.parse(localStorage.getItem('ProductKey')).length
        document.getElementById("checkoutcounT").innerHTML = value
        document.getElementById("checkoutpageId").style.opacity= "1"
         document.getElementById("checkoutcounT2").innerHTML = value
        document.getElementById("checkoutpageId2").style.opacity= "1"
    }
}










function deleteitem(Pval) {
    let storedProducts = JSON.parse(localStorage.getItem('ProductKey'))
    for (let i = 0; i < storedProducts.length; i++) {
        if (storedProducts[i].id === Pval) {
            storedProducts.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('ProductKey', JSON.stringify(storedProducts));
   
    location.reload();
   
    if(storedProducts.length <2){
        document.getElementById("Continue").style.display ="none"
    }
        
}







function tabCustoms(e,id){
    for (let index = 0; index < document.getElementsByClassName("tabcustom").length; index++) {
          
         document.getElementsByClassName("tabcustom")[index].classList.remove("activebar")
        
    }

}


