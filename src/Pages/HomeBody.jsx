import React, { useEffect, useState } from 'react'
import { otherProducts, products, threeDivs } from '../data/data'
import { CardLayout } from '../Components/CardLayout'
import walnuts from '../images/nuts-walnu.png'
import driedFruit from '../images/driedFruits/dried-fruits.png'
import { Pagination } from '../Components/Pagination'
import axios from 'axios'

export const HomeBody = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProducts = async() => {
            await fetch ('https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=be98f335d4044f50b4167fcf7883005a&reverse_sort=false&Appid=737OEYV91K8NJ3X&Apikey=968927990e764fab85c342cf135e6c7b20240712151007715007')
                .then(res=> res.json())
                .then(data=> setProduct(data.items))
        }
        fetchProducts()
    }, [])
    console.log(product)
        
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ postsPerPage, setPostsPerPage ] = useState(10)

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage

    const currentPosts = product.slice(firstPostIndex, lastPostIndex) 
  return (
    <div className=''>
        <div className='bg-almostWhite flex items-center justify-center p-3'>
            <div>
                <h1 className='text-center text-black font-[600] lg:text-[16px]'>Welcome to Nutify</h1>
                <p className='font-[400] lg:text-[32px] text-center text-brown'>Your One-Stop Shop For<br /> 100% 0rganic Nuts and<br /> Seeds</p>
            </div>
            <div className='w-[40%] lg:w-[35%]'>
                <img src={walnuts} className='contain'/>
            </div>
        </div>
        <div className='mt-6'>
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    threeDivs.map(three => {
                        return(
                            <div key={three.id} className='bg-lightPink w-[40%] lg:w-[21%] py-5 px-8 text-center flex flex-col justify-between'>
                                <h1 className='font-[600] text-brown'>{three.description}</h1>
                                <div className=''>
                                    <img src={three.image}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-[81%] lg:w-[66%] mx-auto bg-lightPink mt-5 py-5'>
                <h1 className='text-center font-[400] text-[32px] text-brown'>Products</h1>
                <div className='grid grid-cols-2 px-3 lg:w-[70%] gap-4 mx-auto'>
                    {
                        currentPosts.slice(0, 4).map(product=> {
                            return(
                                <CardLayout key={product.id} product={product} />
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <div className='w-[30%]'>
                        <img src={driedFruit} />
                    </div>
                    <h1 className='bg-almostPink text-center font-[400] text-[32px] text-brown'>Explore <br />Other<br /> Products</h1>
                </div>
                <div className='bg-almostPink py-12'>
                    <div className='grid grid-cols-2 lg:w-[70%] gap-4 gap-y-16 gap-x-8 mx-auto'>
                        {
                            currentPosts.slice(4, 10).map(product => {
                                return(
                                    <CardLayout key={product.id} product={product}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Pagination totalPosts={product.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    </div>
  )
}
