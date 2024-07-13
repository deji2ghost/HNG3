import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, decreaseFromCart, deleteFromCart } from '../Redux/Cart'

export const CartPage = () => {
    const state = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    const handleIncrease = (item) => {
        dispatch(addToCart(item))
        console.log('clicked',item)
    }

    const handleDecrease = (item) => {
        dispatch(decreaseFromCart(item))
        console.log('decrease')
    }

    const handleDelete = (item) => {
        console.log(item, 'delete')
        dispatch(deleteFromCart(item))
        console.log(state)
    }

    const totalAmount = state.reduce((acc, item) => {
        return (acc += item.totalAmount)
    }, 0);

    useEffect(()=> {
        console.log(state)
    }, [state])
  return (
    <div className='mt-6'>
        {
            state.map(item=> {
                return(
                    <div key={item.id} className=' bg-lightPink w-[90%] lg:w-[40%] mx-auto p-3 mb-6'>
                        <div className='md:flex items-start mb-4 gap-2'>
                            <div className='flex flex-col items-center justify-between md:w-[40%] md:h-[300px] p-2 border border-brown mb-3 md:mb-0'>
                                <h1 className='text-center text-[23px] font-[400] text-brown'>{item.name}</h1>
                                <img src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`} />
                            </div>
                            <div className='lg:w-[60%] flex flex-col justify-between md:h-[260px]'>
                                <p>{item.description}</p>
                                <div className='flex items-center justify-between'>
                                    <p className='text-black text-[18px]'>In Stock</p>
                                    <h1 className='font-[400] text-[25px] text-black'>${item.totalAmount}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between bg-almostPink p-3'>
                            <button onClick={()=> handleDelete(item)} className='flex items-center gap-1'>
                                <FontAwesomeIcon icon={faTrash} className='text-brown text-xl'/>
                                <p>Remove</p>
                            </button>
                            <div className='flex items-center gap-2'>
                                <button className='text-almostPink bg-brown rounded-full p-1 w-[30px] h-[30px]' onClick={()=> handleDecrease(item)} disabled={item.quantity === 1}>
                                    <FontAwesomeIcon  icon={faMinus} />
                                </button>
                                <p>{item.quantity}</p>
                                <button onClick={()=>handleIncrease(item)} className='text-almostPink bg-brown rounded-full p-1 w-[30px] h-[30px]'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        <div className='bg-lightPink w-[90%] lg:w-[40%] p-3 mx-auto my-4'>
            <h1 className='text-brown text-center text-[32px] font-[400]'>Cart Summary</h1>
            <div className='flex justify-between items-center text-black bg-almostPink p-3 my-4'>
                <p className='text-[21px] font-[400]'>Sub Total</p>
                <h1 className='text-[28px] font-[400]'>${totalAmount}</h1>
            </div>
            <Link to='/checkout'>
                <button className='text-almostWhite bg-brown w-full p-3 rounded-[10px] font-[400] text-[28px] gap-7'>Checkout ${totalAmount}</button>
            </Link>
        </div>
        <Link to='/' className='text-almostWhite bg-[#48190D99] p-3 w-[35%] lg:w-[10%] mx-auto flex items-center justify-center rounded-[10px] mb-5 font-[400] text-[22px] md:text-[28px]'>
            Go Back
        </Link>

    </div>
  )
}
