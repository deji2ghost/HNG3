import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Checkout.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { emptyCart } from '../Redux/Cart'

export const CheckOut = () => {
    const [one, setOne] = useState(2)
    const [two, setTwo] = useState(1)
    const state = useSelector(state => state.cart)
    const form = useForm()
    const [confirm, setConfirm] = useState(true)

    const onSubmit = (data) => {
        // registerUser(data)
        console.log('the data is', data)
        if(data){
            setConfirm(false)
        }
    }

    const {register, handleSubmit, formState, reset} = form

    const { errors } = formState

    // const {errors, isSubmitting, isSubmitSuccessful, isSubmitted, submitCount, isValid, isDirty} = formState;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-lightPink w-[90%] lg:w-[60%] mx-auto mt-6 py-3 px-5'>
                <div className='script flex items-center justify-between mb-20 relative'>
                    <div className='flex flex-col items-center'>
                        <div className='border-2 h-6 w-6 p-[15px] rounded-full border-brown relative'>
                            <p className='absoulte bg-brown'></p>
                        </div>
                        <label className='text-center text-brown font-[400] text-[17px]'>Shipping</label>
                    </div>
                    <span className='hidden lg:block absolute bg-brown top-[18px] lg:left-[46px] -translate-y-1/2 lg:w-[37%] h-[2px]'></span>
                    <div className='flex flex-col items-center'>
                        <div className='border-2 h-6 w-6 p-[15px] rounded-full border-brown relative'>
                            <p className={`${confirm ? 'bg-brown' : 'bg-transparent'} 'absoulte bg-brown top-0 left-0 -translate-y-1/2 -translate-x-1/2 h-6 w-6 rounded-[100%]'`}></p>
                        </div>
                        <label className='text-center text-brown font-[400] text-[17px]'>Billing</label>
                    </div>
                    <span className='hidden lg:block absolute bg-brown top-[18px] right-[65px] -translate-y-1/2 lg:w-[39%] h-[2px]'></span>
                    <div className='flex flex-col items-center'>
                        <div className='border-2 h-6 w-6 p-[15px] rounded-full border-brown relative'>
                            <p className={`${!confirm ? 'bg-brown' : 'bg-transparent'} 'absoulte bg-brown top-0 left-0 -translate-y-1/2 -translate-x-1/2 h-6 w-6 rounded-[100%]'`}></p>
                        </div>
                        <label className='text-center text-brown font-[400] text-[17px]'>Confirmation</label>
                    </div>
                </div>
       { confirm ?
        <div className='flex flex-col-reverse md:flex-row md:gap-4 items-start'>
            <div className='md:w-[80%] gap-4 mb-4'>
                <div className='mb-12'>
                    <h1 className='font-[400] text-brown text-[22px] mb-5 md:text-[24px]'>Payment Method</h1>
                    <form className='checkbox flex items-center gap-8'>
                        <div className='flex flex-col md:flex-row items-center gap-3'>
                            <input type='radio' name='yes' checked={one === 2} onClick={() => setOne(2)} className=''/>
                            <label htmlFor='yes' className='font-[400] text-[20px]'>Mastercard</label>
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-3'>
                            <input type='radio' name='yes' checked={two === 2} onClick={() => setTwo(2)} className=''/>
                            <label htmlFor='no' className='font-[400] text-[20px]'>Visacard</label>
                        </div>
                    </form>
                </div>

                <div className=''>
                    <h1 className='mb-9 font-[400] text-brown text-[22px] md:text-[24px]'>Payment Details</h1>
                    <form className='flex flex-col gap-6 md:gap-16'>
                        <div>
                            <input 
                                type='text' 
                                placeholder='Enter Name On Card'  
                                className='border-b-2 border-opacity-50 focus:border-opacity-100 border-brown outline-none bg-inherit md:w-[70%]'
                                {...register('username', {
                                    required: {
                                        value: true,
                                        message: 'You have to put a name'
                                    }
                                })}
                            />
                            <p className="text-red-800 text-[17px] rounded">{errors.username?.message}</p>
                        </div>
                        <div>
                            <input 
                                type='number' 
                                placeholder='Card Number' 
                                className='border-b-2 border-opacity-50 focus:border-opacity-100 border-brown outline-none bg-inherit md:w-[70%]'
                                {...register('cardDetails', {
                                    required: {
                                        value: true,
                                        message: 'You have to put your card details'
                                    }
                                })}
                            />
                            <p className="text-red-800 text-[17px] rounded">{errors.cardDetails?.message}</p>
                        </div>
                        <div className='gap-6 md:w-[70%] flex flex-col md:flex-row md:items-center md:gap-14'>
                            <div>
                                <input type='number' 
                                    placeholder='Expiration' 
                                    className='border-b-2 border-opacity-50 focus:border-opacity-100 border-brown outline-none bg-inherit w-[65%] md:w-[60%]'
                                    {...register('expDate', {
                                        required: {
                                            value: true,
                                            message: 'You have to put this info'
                                        }
                                    })}
                                />
                                <p className="text-red-800 text-[17px] rounded">{errors.expDate?.message}</p>
                            </div>
                            <div>
                                <input 
                                    type='number' 
                                    placeholder='CVV Code' 
                                    className='border-b-2 border-opacity-50 focus:border-opacity-100 border-brown outline-none bg-inherit w-[65%] md:w-[30%]'
                                    required
                                    {...register('cvv', {
                                        required: {
                                            value: true,
                                            message: 'You have to put a cvv'
                                        }
                                    })}
                                />
                                <p className="text-red-800 text-[17px] rounded">{errors.cvv?.message}</p>
                            </div>
                        </div>
                    </form>
                </div>

                <h1 className='font-[400] mt-5 mb-4 md:mb-0 md:mt-2 text-brown'><input type='checkbox'/> By Clicking ‘Confirm Payment’ I Agree To The Store Terms and Services</h1>
            </div>
            <div className='md:w-[20%]'>
                {
                    state.map(item => {
                        return(
                            <div key={item.id} className='border-brown border mb-8 md:h-[260px] flex flex-col items-center justify-between p-2'>
                                <h1 className='text-center font-[400] text-brown text-[22px]'>{item.name}</h1>
                                <div className=''>
                                    <img  src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`} />
                                </div>
                                <p className='text-center font-[400] text-black text-[28px]'>${item.totalAmount}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div> :
        <h1 className='text-2xl font-semibold'>Your Order has been Succesful and your package will arrive in 5 days</h1>
        }
        <div className='flex items-center justify-between'>
            <Link to='/cart' className='block w-[30%] text-white p-3 rounded-[12px] bg-[#48190D99] mx-auto text-center'>
                Back
            </Link>
            {confirm ? <button type='submit' className='bg-brown w-[60%] text-white p-3 rounded-[12px]'>Confirm Payment</button> : <Link to='/' onClick={() => emptyCart()} type='submit' className='bg-brown w-[60%] text-white p-3 rounded-[12px] text-center'>HomePage</Link>}
        </div>
    </form>
  )
}
