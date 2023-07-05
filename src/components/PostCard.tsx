import React from 'react'
import { PostProps } from '../types/types'

const PostCard = ({title, body}: PostProps) => {
  return (
    <div className='bg-white shadow-lg rounded-md p-5'>
         <h1 className='text-[20px] font-semibold'>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default PostCard