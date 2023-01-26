const baseURL = "https://game-hubs.com/wp-json/wc/store/products"
const preveiwContainer = document.querySelector('.products-preview');
const previewBox = preveiwContainer.querySelectorAll('.preview');
const productContainer = document.querySelector('.products-container')
const previewImage = document.querySelector('#preview-image');
const productDescription = document.querySelectorAll("#product-description");



async function getProducts (url){
    const response = await fetch(url);
    const products = await response.json();
    
      products.forEach(function(product){
         
       productContainer.innerHTML += 
       `
     
         <div class="product" data-id="${product.id}"}">
            <img src="${product.images[0].src}" alt="">
            <h3>${product.name}</h3>
          <div class="price">${product.prices.price} NOK</div>
         </div>
  
        `


       document.querySelectorAll('.products-container .product').forEach(productDiv =>{
         productDiv.onclick = () =>{
           preveiwContainer.style.display = 'flex';
           let name = productDiv.getAttribute('data-name');
           previewBox.forEach(preview =>{
             let id = productDiv.getAttribute('data-id');
             const clickedProduct = products.find(product => product.id === parseInt(id));
             console.log(clickedProduct);
             previewImage.src = clickedProduct.images[0].src;
             productDescription.innerHTML = clickedProduct.description;
            //console.log(productDescription);
             preview.classList.add('active');
           });
         };
       });

       previewBox.forEach(close =>{
         close.querySelector('.fa-times').onclick = () =>{
           close.classList.remove('active');
           preveiwContainer.style.display = 'none';
         };
       });

   })
   
}

getProducts(baseURL);

