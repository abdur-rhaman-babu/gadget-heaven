// const getCartFromLS = () =>{
//     const storedCart = localStorage.getItem('cart')
//     if(storedCart){
//         const cartList = JSON.parse(storedCart)
//         return cartList;
//     }else{
//         return []
//     }
// }

// const addCartToLS = (id,price) =>{
//     const storedCart = getCartFromLS()
//     if(storedCart.includes({id,price})){
//         alert('already added')
//     }else{
//         storedCart.push({id,price})
//         const cartStringify = JSON.stringify(storedCart)
//         localStorage.setItem('cart', cartStringify)
//     }
// }

// export {addCartToLS, getCartFromLS}