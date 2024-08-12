
function dataget(Pval) {
   
    // Retrieve the list of products from localStorage
    let storedProducts = JSON.parse(localStorage.getItem('ProductKey')) || [];
    var elements = document.getElementsByClassName("myElement");

    // Loop through all elements with the class "myElement"
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        let img = element.querySelectorAll("img")
        let color = element.querySelectorAll("p")[1]?.attributes[1]?.value
        let size = element.querySelectorAll("p")[2]?.attributes[1]?.value
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
                storedProducts.push({ id: dataExample, count: 1, img: img[0].currentSrc, color: color, size: size, price: price });
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



function incrementValue(e) {

    
    e.preventDefault();
    var fieldName = $(e.target).data("field");
    var parent = $(e.target).closest("div");
    var currentVal = parseInt(
        parent.find("input[name=" + fieldName + "]").val(),
        10
    );

    if (!isNaN(currentVal)) {
        parent.find("input[name=" + fieldName + "]").val(currentVal + 1);
    } else {
        parent.find("input[name=" + fieldName + "]").val(0);
    }

    let storedProducts = JSON.parse(localStorage.getItem('ProductKey')) || [];

    for (let i = 0; i < storedProducts.length; i++) {
        if (storedProducts[i].id === e.target.id.split("plus")[0]) {
            // Update the count if the ID matches
            storedProducts[i].count += 1;
            productFound = true;
            break;
        }
    }

    localStorage.setItem('ProductKey', JSON.stringify(storedProducts));
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data("field");
    var parent = $(e.target).closest("div");
    var currentVal = parseInt(
        parent.find("input[name=" + fieldName + "]").val(),
        10
    );

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find("input[name=" + fieldName + "]").val(currentVal - 1);
    } else {
        parent.find("input[name=" + fieldName + "]").val(0);
    }

    let storedProducts = JSON.parse(localStorage.getItem('ProductKey')) || [];

    for (let i = 0; i < storedProducts.length; i++) {
        if (storedProducts[i].id === e.target.id.split("minus")[0]) {
            // Update the count if the ID matches
            if(storedProducts[i].count >= 2){
                storedProducts[i].count -= 1;
                productFound = true;
                break;
            }
             else if (storedProducts[i].id === e.target.id.split("minus")[0]) {
                if(storedProducts[i].count <= 1){
                    storedProducts.splice(i, 1);
                    location.reload();
                   
                }
                
            }
           
        }
    }

    localStorage.setItem('ProductKey', JSON.stringify(storedProducts));
}

$(".input-group").on("click", ".button-plus", function (e) {
    incrementValue(e);

});

$(".input-group").on("click", ".button-minus", function (e) {
    decrementValue(e);
});




function tabCustoms(e,id){
    for (let index = 0; index < document.getElementsByClassName("tabcustom").length; index++) {
          
         document.getElementsByClassName("tabcustom")[index].classList.remove("activebar")
         document.getElementsByClassName("sectionCatalog")[index].classList.remove("acriveCatalog")
        
    }

    e.classList.add("activebar")
    document.getElementById(`${id}`).classList.add("acriveCatalog")

}