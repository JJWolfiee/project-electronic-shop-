




const currentProducts = products            

const productsSection = document.querySelector('.products');



const renderProducts = (items) => {
    for(let i = 0; i < items.length; i++){
        const newProduct = document.createElement ('div');
        newProduct.className = `product-item ${items[i].sale ? "on-sale": ""}`
        newProduct.innerHTML = `


        <img src="${items[i].image}" alt="product-image"/>
                <p class="product-name"> Huawei P20</p>
                <p class="product-description ">
                    xxxxxxxxxxxajkshdakjsdhalkjh ajhsdkjash kj ajkshdkja 
                     jkahsd kasdk jkahsdkja shd kashd ajkshk
                     ajsdh k aksjhd akjsdh kaja skdjha sdkja
                     h sddkjh asdjkh 
                </p>
                <div class="product-price">
                    <span class="price">2999.99 usd</span>
                    <span class="sale">2700.01 usd</span>
                </div>
                <button class="product-add-to-basket">add to basket</button>
                <p class="product-item-sale-info">Promotion</p>`;

                productsSection.appendChild(newProduct);
    }
};




document.onload = renderProducts(currentProducts);