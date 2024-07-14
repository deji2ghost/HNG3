import React from 'react'

export const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {

    let pages = [];
    console.log(totalPosts)

    for( let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    console.log(pages, totalPosts)
  return (
    <div className='flex items-center justify-center gap-3'>
        {
            pages.map((page, index) => {
                return <button className='bg-brown rounded-sm p-2 text-almostWhite' onClick={() => setCurrentPage(page)} key={index}>{page}</button>
            })
        }
    </div>
  )
}
