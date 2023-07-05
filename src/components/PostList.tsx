import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { PostProps } from '../types/types';

// async function getData (){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    
//     if(!res.ok){
//         throw new Error ("Failed to get data");
//     }
//     return res.json();
// }


const PostList = () => {

    const [posts, setPosts] = useState([]);
    
    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                // return res.json();
                const data:PostProps[] = await res.json();
                setPosts(data);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

  return (
    <div className='grid grid-cols-3 gap-6 mt-10 p-6'>
        {posts.map((post) => (
            <PostCard key={post.id} {...post} />
        ))}
       
    </div>
  )
}

export default PostList