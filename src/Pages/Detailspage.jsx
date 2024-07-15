import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Detailspage = () => {
    const {id} = useParams()
    const [value, setValue] = useState(0)
    const [slide, setSlide] = useState(1)
    console.log(id)
    const [ detail, setDetail ] = useState({})

    useEffect(()=> {
        const fetchProduct = () => {
            fetch(`https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=be98f335d4044f50b4167fcf7883005a&Appid=737OEYV91K8NJ3X&Apikey=968927990e764fab85c342cf135e6c7b20240712151007715007`)
                .then(res=> res.json())
                .then(data=> setDetail(data))
        }
        fetchProduct()
    }, [])
    console.log(detail)

  return (
    <>
    { detail ?
    (<div className=' bg-lightPink w-[90%] mx-auto p-3 mb-6'>
        <div className='items-start gap-2 mb-3'>
            <div className='flex flex-col items-center justify-between md:h-[300px] p-2 border border-brown mb-3 md:mb-0'>
                <h1 className='text-center text-[23px] font-[400] text-brown'>{detail?.name}</h1>
                {detail?.photos?.slice(0, 5)?.map((photo, index)=> {
                    return(
                        <div key={index} className={`${slide === index ? 'relative' : 'hidden'} `}>
                            <img className='h-[250px] object-contain' src={`https://api.timbu.cloud/images/${photo?.url}`} />
                        </div>
                    )
                })}
                
            </div>
            <div className=' justify-between'>
                <div className='flex items-center justify-between'>
                    <p>{detail.name}</p>
                    <p className='text-black text-[18px]'>In Stock</p>
                </div>
                <h1 className='font-[400] text-[25px] text-black'>{detail?.description}</h1>
            </div>
        </div>
        <div className='flex justify-center gap-3 '>
            {detail?.photos?.slice(0, 5)?.map((photo, index)=> {
                return(
                    <img className={`${index === slide && 'border-2 border-orange-400 opacity-80'} 'border-2 overflow-hidden gap-5 w-[30%] md:w-[20%] md:h-[130px] object-contain' `} onClick={() => setSlide(index)} src={`https://api.timbu.cloud/images/${photo?.url}`} />
                )
            })}
        </div>
    </div>) : 'Loading...'}
    </>
  )
}
