import { createSlice } from "@reduxjs/toolkit"


const initialState={
    cart: [
        // {
        //     id: 2,
        //     image: walNut,
        //     price: '40',
        //     name: 'Wal Nuts',
        //     description: 'Walnuts are a type of tree nut that is rich in nutrients and has a distinctive appearance and flavor. walnuts are a delicious and nutritious snack that can be enjoyed on their own or used in a variety of recipes, from baked goods to savory dishes.',
        //     quantity: 1,
        //     totalAmount: 40
        // },
        // {
        //     id: 3,
        //     image: chiaSeeds,
        //     price: '10',
        //     name: 'Chia Seeds',
        //     description: 'Chia seeds are a type of edible seed that comes from the plant Salvia hispanica, native to Central America and Mexico.They have been a staple food in many cultures for centuries, and are highly valued for their nutritional and health benefits.',
        //     quantity: 1,
        //     totalAmount: 10
        // }
    ],
}

const CartSlice= createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(exist => exist.id === action.payload.id)
            console.log(existingProduct)
            if(existingProduct){
                const tempCart = state.cart.map(product => {
                    const newQty = product.quantity + 1
                    const newTotal = newQty * action.payload.current_price[0]?.NGN[0]
                    if(product.id === action.payload.id){
                        return({
                            ...product, quantity: newQty, totalAmount: newTotal
                        })
                    }else{
                        return(product)
                    }
                })
                state.cart = tempCart
            }else{
                state.cart.push(action.payload)
            }
        },
        decreaseFromCart: (state, action) => {
            const existingProduct = state.cart.find(exist => exist.id === action.payload.id)
            console.log(existingProduct)
            if(existingProduct){
                const tempCart = state.cart.map(product => {
                    const newQty = product.quantity - 1
                    const newTotal = newQty * action.payload.current_price[0]?.NGN[0]
                    if(product.id === action.payload.id){
                        return({
                            ...product, quantity: newQty, totalAmount: newTotal
                        })
                    }else{
                        return(product)
                    }
                })
                state.cart = tempCart
            }else{
                state.cart.push(action.payload)
            }
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
    }
})

export const { addToCart, decreaseFromCart, deleteFromCart } = CartSlice.actions
export default CartSlice.reducer