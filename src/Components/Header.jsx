import { faHeart, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hazel from '../images/Hazelnut.png'
import support from '../images/Support.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {
    const state = useSelector(state=> state.cart)
    console.log(state.length)
  return (
    <div>
        <div className='flex items-center justify-between bg-almostPink text-brown py-2 px-[15px] lg:px-[40px]'>
            <div className='flex lg:gap-2'>
                <div className='flex items-center'>
                    <img src={hazel} className='w-[20%] lg:w-[25%]'/>
                    <h1 className='font-[400] text-[32px]'>Nutify</h1>
                </div>
                <div className='hidden md:flex items-center relative'>
                    <div>
                        <input placeholder='search products' className='border-none outline-none rounded-md py-[2px] px-4'/>
                    </div>
                    <FontAwesomeIcon icon={faSearch} className='absolute right-1'/>
                </div>
            </div>
            <div className='flex items-center md:gap-8 lg:gap-16'>
                <div className='hidden md:flex items-center'>
                    {/* <FontAwesomeIcon icon={faHeadset} /> */}
                    <img src={support}/>
                    <div className=''>
                        <p className='font-[600]'>Call us 24/7</p>
                        <p className='text-black font-[600] -mt-1'>+2348167208977</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 lg:gap-5'>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faHeart} />
                    <Link to='/cart' >
                        <div className='relative'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <p className='bg-white text-brown w-[23px] font-[600] text-center rounded-[100%] absolute -top-3 -right-2'>{state.length}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex justify-evenly items-center bg-brown text-almostPink py-[10px] text-[16px] font-[600]'>
            <Link to='/'>
                <h1>Home</h1>
            </Link>
            <h1>Contact Us</h1>
            <h1>Pricing</h1>
        </div>
    </div>
  )
}
