let total = 0;
let inputProduct = document.querySelector('#searchInput');
let inputCategory = document.querySelector('.categoryInput');


let productContainer = document.querySelector('#products');
let categoryList = document.querySelector('#categoryList');

let productsArray = [];
let categoriesArray = [];


window.addEventListener('DOMContentLoaded', async () => {
   let responseProduct = await fetch('https://tiendabsale-rcg.up.railway.app/api/v1/products');
   let { data: dataProducts } = await responseProduct.json();
   productsArray = dataProducts
   renderProducts(productsArray)

   let responseCategory = await fetch('https://tiendabsale-rcg.up.railway.app/api/v1/categories');
   let { data: dataCategories } = await responseCategory.json();
   categoriesArray = dataCategories;
   renderCategories(categoriesArray)


})

function renderProducts(products) {
   products.forEach(product => {
      let { name, price, discount, url_image } = product;
      let total = price - (100 - discount / 100);
      productContainer.innerHTML += `
      <div class="product__item">
         <div class="product__content-top">
            ${discount > 0 ? `<span class="product__discount">-${discount}%</span>` : ``}
            <div class="product__box-img">
                  <img src="${url_image}" alt="${name}">
            </div>
         </div>
         <div class="product__content-bottom">
            <h3 class="product__name">${name}</h3>
            <div class="product__price">
               ${discount > 0 ? `<p class="product__real-price">${price}</p>` : ``}
            <p class="product__price-with-dis">${discount ? total : price}</p>
            </div>
         </div>
      </div>
    `

   });
}

function renderCategories(categories) {
   let index = 1;
   categories.forEach(category => {
      categoryList.innerHTML += `
      
         <option value=${index}> ----- ${category.name} -----</option>
      `
      index++
   })
}

inputCategory.addEventListener('change', async e => {
   let value = inputCategory.value

   if (value > 0) {
      let response = await fetch(`https://tiendabsale-rcg.up.railway.app/api/v1/products?category=${value}`);
      let { data } = await response.json();
      productsArray = data
      productContainer.innerHTML = ''
      renderProducts(productsArray)
   } else {
      let responseProduct = await fetch('https://tiendabsale-rcg.up.railway.app/api/v1/products');
      let { data: dataProducts } = await responseProduct.json();
      productsArray = dataProducts
      renderProducts(productsArray)
   }
})



inputProduct.addEventListener('keyup', async (e) => {
   const textSearch = inputProduct.value.toLowerCase();
   let response = await fetch(`https://tiendabsale-rcg.up.railway.app/api/v1/products?name=${textSearch}`);
   let { data } = await response.json();
   productsArray = data
   productContainer.innerHTML = ''
   renderProducts(productsArray)
});


