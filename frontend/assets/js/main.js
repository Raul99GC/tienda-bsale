
// fetch('https://tiendabsale-rcg.up.railway.app/api/v1/products')
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => err)

let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.products');

let respuesta = await fetch('https://tiendabsale-rcg.up.railway.app/api/v1/products');
let { data } = await respuesta.json();


let productsArray = data.slice(1, 7);


productsArray.forEach(product => {

    let {name, price, discount, url_image } = product;
    let total = price - (100-discount / 100);
    console.log(total)

    productContainer.innerHTML += `
            
                <div class="product__item">
                    <div class="product__content-top">
                        ${
                            discount > 0 ? `<span class="product__discount">-${discount}%</span>` : ``
                        }
                        
                        <div class="product__box-img">
                            <img src="${url_image}" alt="">
                        </div>
                    </div>
                    <div class="product__content-bottom">
                        <h3 class="product__name">${name}</h3>
                        <div class="product__price">
                        ${
                            discount>0 ? `<p class="product__real-price">${price}</p>` : ``
                        }
                            
                            <p class="product__price-with-dis">${discount? total : price}</p>
                        </div>
                    </div>
                </div>
    `
});