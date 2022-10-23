
//Cambiar el valor del carro al momento de presionar addcart
var valor = 0
var productArraycart = []
let productArray = [];
const data=[]
var addcartValue = []
//searchProduct()


const url = 'https://api.escuelajs.co/api/v1/products/'

//const myTimeout = setTimeout(presionoboton, 500)

const searchBar = document.querySelector('#search-bar')
const shopProduct = document.querySelector('.shop-product')


searchBar.addEventListener('keyup',(e)=>{
    const searchString = e.target.value.toLowerCase()
    const filteredProduct = productArray.filter((product) =>{
        return product.title.toLowerCase().includes(searchString) //|| product.price.contain()
    })
    displayProduct(filteredProduct)
})

searchBar.addEventListener('keyup',(e)=>{
    const searchString = e.target.value.toUpperCase()
    const filteredProduct = productArray.filter((product) =>{
        return product.title.toUpperCase().includes(searchString) //|| product.price.contain()
    })
    displayProduct(filteredProduct)
})



const loadProducts = async() =>{
    try{
        const res = await fetch ('https://api.escuelajs.co/api/v1/products/')
        productArray = await res.json()
        displayProduct(productArray)
    }catch (err){
        alert('LA PAGINA NO ESTA CARGANDO LOS PRODUCTOS')
        console.log(err)
    }
}

const displayProduct = (products)=>{
    const htmlString = products
        .map((product)=> {
            return`
            <div class="shopProduct">
                    <h2 class="shopProduct-Title">${product.title}</h2>
                    <img src="${product.images[0]}" alt="" width="200px" class="shopProduct-Image">
                    <p class="shopProduct-Price">$${product.price}</p>
                    <label for="add-product">Agregar</label>
                    <input id="add-product" type="number" class="add-product" min="0" value="0">
                    <button class ="shopProduct-Add" type="button">Add to Cart</button>
            </div>
            `
        })
        .join('')
    shopProduct.innerHTML = htmlString
}

loadProducts()

var addCart = document.querySelectorAll('.shopProduct-Add')
console.log(addCart)
addCart = [...addCart]
console.log(addCart)










// export function ajax(){
//     return fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => response.json());
// }




// let productCards =  document.querySelectorAll('.shopProduct')
// console.log(productCards)



// addcartValue.addEventListener('click', () =>{
//     let addProduct = document.querySelectorAll('.shopProduct-Add');
//     for (let i in addcartValue){
//         addcartValue[i].value = addProduct
//         console.log(valor)
//     }
// })



// addcartValue.addEventListener('click', () =>{
//     var addProduct = document.querySelector('.add-product')
//     addProduct= parseInt(addProduct.value)
//     valor = addProduct+valor
//     const carShopping = document.querySelector('.carshopping')
//     if (addProduct = 0){
//     }
//     else{
//         carShopping.innerHTML = `<i class="fa badge fa-lg" value="${valor}">&#xf07a;</i>`
//         productArraycart.innerHTML = `
//             <div class="shop-product">
//                 <h2 class="shop-product-title">Iphone</h2>
//                 <img src="./images/producto.jpeg" alt="" class="shopProduct-image">
//                 <p class="product-description">Distribuidor autorizado Apple. Devoluciones: solo productos dañados, inoperantes al primer uso o sin abrir en caja original sellada</p>
//                 <p class="shopProduct-Price">$300</p>
//             </div>`
//         return valor
//     }
// })





// //API DE CONSUMO

// fetch (url)
// .then(res => res.json())
// .then(data => console.log(data))






//     var productArray = data.slice(1,4)
//     productArray.forEach(product=>{
//     shopProduct.innerHTML += `
//     <div class="shopProduct">
//         <h2 class="shopProduct-Title">${product.title}</h2>
//         <img src="${product.images[0]}" alt="" width="200px" class="shopProduct-Image">
//         <p class="shopProduct-Price">$${product.price}</p>
//         <button class ="shopProduct-Add" type="button">Add to Cart</button>
//     </div>`
//     })
//     addProduct = [...addProduct]
//     addProduct.forEach(btn=>{
//         btn.addEventListener('click',()=>{
//             console.log('click')
//             carContainer.innerHTML += `
//             `
//             shoppingCartArray = carContainer.add()

//         })
//     })
// }





/////////////////////////////////////////////

// //VARIABLES INICIALES
// // const productName = ''
// let url = '';
// var productArray = [];
// let shoppingCartArray = [];
// let total = 0;
// let products = []
// // const data = []

// //EXTRAEL EL DATO INGRESADO POR EL USUARIO
// const search = document.querySelector('.search');
// const productTitle = document.querySelector('.productTitle')
// const shopProduct = document.querySelector('.shopProduct')
// const addProduct = document.querySelectorAll('.shopProduct-Add')
// const carContainer = document.querySelector('.car')


// search.addEventListener('change', searchclick)

// function searchclick(){
//     const searchProduct = search.value;
//     //console.log(searchProduct)
//     productTitle.innerText = "El resultado de la busqueda es: "+searchProduct
//     return (url = 'https://api.escuelajs.co/api/v1/products/')
//     //return (url = 'https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword='+searchProduct+'&offset=0&limit=24&sponsored=1&rating=0')
// }

// //PETICION DE PRODUCTO
// // let res = await fetch ('https://api.escuelajs.co/api/v1/products/')
// // let data = await res.json()








// searchProduct()
// console.log(addProduct)
// // addProduct = [...addProduct]
// console.log(addProduct)
// addProduct.addEventListener('click',()=>{
//     console.log('click')
// })

// //var productArray = data.slice(0,4)
// // productArray.forEach(product=>{
// // shopProduct.innerHTML += `
// // <div class="shopProduct">${product.title}</div>`
// // })

// //     const res = await fetch('https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword=iphone&offset=0&limit=24&sponsored=1&rating=0', options)
// //     const data = await res.json()
// //     console.log(data)
// //     productSelected.push(data)
// // }
// // .then(res => res.json());

// //API DE CONSUMO DE PRODUCTO https://api.escuelajs.co/api/v1/products/




// // console.log(url)

// // if (productTitle.value === undefined){
// //     console.log('entro aqui')
// // }else{
// //     const url = 'https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword='+productTitle+'&offset=0&limit=24&sponsored=1&rating=0'
// // }

// // console.log(url)

// //API DE TARGET PARA PRODUCTOS
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': '791ffdf56dmshc19eea3631ae6dcp16affbjsnf8cd4bc88cde',
// // 		'X-RapidAPI-Host': 'target-com-store-product-reviews-locations-data.p.rapidapi.com'
// // 	}
// // };

// // fetch('https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword=iphone&offset=0&limit=24&sponsored=1&rating=0', options)
// // 	.then(response => response.json())
// // 	.then(response => console.log(response))
// // 	.catch(err => console.error(err));

// // //FUNCIONES

// // let product = document.querySelector('#main');
// // let productSelected = [];
// // async function searchProduct(){
// //     const res = await fetch('https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword=iphone&offset=0&limit=24&sponsored=1&rating=0', options)
// //     const data = await res.json()
// //     console.log(data)
// //     productSelected.push(data)
// // }