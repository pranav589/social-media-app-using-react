import React,{useEffect} from 'react'
import GetPost from '../api/GetPost'

const PostList=()=>{
  useEffect(()=>{
     const getAllPosts=async ()=>{
       const result=await GetPost()
       console.log(result)
     }
      getAllPosts()
     
  },[])
  return(
    <div>
      hello
    </div>
  )
}

export default PostList