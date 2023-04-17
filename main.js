let products= [
    
    {
        name: "Mango",
        description: "Sweet and yummy fruit" ,
        price: 9

    },
    {
        name: "Custard Apple",
        description: "Sweet Fruit with big eyes" ,
        price: 6

    },
    {
        name: "Orange",
        description: "It is Orange" ,
        price: 10

    }
];
//display all products
function showProducts()
{

    let html='';
    //loop over products
    for(let product of products)
    {
        html += `
         <div class="product">
         <h2>${product.name}</h2>
         <div class= "info">
         <p>${product.description}</p>
         <p> Pris: <b> ${product.price}</b></p>
         </div>
         <button class ="remove" data-product-name ="${product.name}" > Remove </button>
         <hr>
         </div>

        `;
    }
    document.querySelector('.products').innerHTML =html;
}
//showProducts();
//handle all click events
function handleEvents()
{
    //add event listeners to entire body and listen for clicks
    document.querySelector('body').addEventListener('click', function(event)
    {
        let productclicked=event.target.closest('.product');
        //if you click somewhere unrelated, we just return
        if(!productclicked)
        {
            return;
        }
        //get the info div from the clicked product
        let infoproduct =productclicked.querySelector('.info');
        infoproduct.style.display = infoproduct.style.display === 'block' ? 'none':'block';

        //if the closest element is the remove button
        let removeButton =event.target.closest('.remove');
        if(removeButton)
        {
            //get the attribute data product name
            let productName = removeButton.getAttribute('data-product-name');
            //remove products bby name  from array ,using filter
            products = products.filter((product)  => product.name!==productName);
            productclicked.remove();

        }
    });

        //event listener for the add product from that listens foor submit kand nnot click
        let addProductionForm = document.querySelector('#add-product-form');
        addProductionForm.addEventListener('submit',function(event)
        {//dont let the site reload when submit is clicked
            event.preventDefault();
            let name =document.querySelector('#name').value;
            let description= document.querySelector('#description').value;
            let price = Number(document.querySelector('#price').value);

            //error handling, check all the fields are filled out
            if(name && description && price )
            {
                //new product
                let newproduct =

                {
                    name:name,
                    description:description,
                    price:price

                };
                //add the product to the products array
                products.push(newproduct);

                //reset the form and show new div
                let productsdiv= document.querySelector('.products');
                productsdiv.innerHTML= ' ';
                //render thhe products again

                showProducts();
                console.log(products);
                //reset the form
                addProductionForm.reset();

            }
            else
            {
                alert('Please fill in all the fields');

            }


        });

    
}
showProducts();
handleEvents();