import React from 'react'
import addCart from '../images/Home/Add.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Cart'
import { Link } from 'react-router-dom'

export const CardLayout = ({product}) => {
    const qty = 1
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const clicked = (newProduct) => {
        console.log('clicked one', newProduct)
        const totalAmount = qty * newProduct.current_price[0]?.NGN[0]
        dispatch(addToCart({
            ...newProduct, quantity: qty, totalAmount,
        }))
        console.log(state)
    }
  return (
    <div className='border border-brown flex flex-col items-center justify-between p-4'>
        <button onClick={()=> clicked(product)} className='flex items-center justify-center mx-auto'>
                {/* <FontAwesomeIcon icon={faPlus} className='text-white bg-brown' /> */}
            <div className='w-[20%]'>
                <img src={addCart}/>
            </div>
            <p>Add To Cart</p>
        </button>
        <Link to={`/details/${product.id}`} >
            <div className=''>
                <div>
                    <img src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}/>
                </div>
                <p className='text-center text-brown font-[400] text-[20px]'>{product?.name}</p>
                <p className='text-center text-black font-[400] text-[20px]'>${product?.current_price[0]?.NGN[0]}</p>
            </div>
        </Link>
    </div>
  )
}
