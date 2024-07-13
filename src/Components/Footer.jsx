import React from 'react'
import { footer } from '../data/data'
import Facebook from '../images/Home/Facebook.png'
import TwitterX from '../images/Home/TwitterX.png'
import Instagram from '../images/Home/Instagram.png'

export const Footer = () => {
  return (
    <div className='py-3 px-8'>
        <div className='mb-3 flex items-center justify-between text-brown font-[400]'>
            {
                footer.map(foot=> {
                    return(
                        <div key={foot.id} className='flex items-center gap-4'>
                            <div className='w-[15%] hidden md:block'>
                                <img src={foot.image} />
                            </div>
                            <div>
                                <h1 className='text-[20px]'>{foot.heading}</h1>
                                <p className='text-[12px] md:w-[50%]'>{foot.paragraph}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='flex items-start md:items-center justify-between'>
            <div className='w-[45%] md:w-[50%]'>
                <div>
                    <h1 className='text-[20px]'>Need Help?</h1>
                    <ul>
                        <li className='text-[12px] list'>Chat with us</li>
                        <li className='text-[12px] list'>Help Center</li>
                        <li className='text-[12px] list'>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[20px]'>Join Us Now</h1>
                    <div className='flex items-center'>
                        <div className='w-[20%] md:w-[5%]'><img src={Facebook} /></div>
                        <div className='w-[20%] md:w-[5%]'><img src={TwitterX} /></div>
                        <div className='w-[20%] md:w-[5%]'><img src={Instagram} /></div>
                    </div>
                </div>
            </div>
            <div className='w-[40%] md:w-[37%] lg:w-[23%]'>
                <h1 className='text-center text-[20px]'>About Us</h1>
                <p className='text-[12px]'>At Nutify, we're passionate about providing the highest quality, 100% organic nuts and seeds to our customers. Our mission is to make healthy eating easy and accessible, without compromising on taste or quality.
                </p>
            </div>
        </div>
    </div>
  )
}
