import React,{useEffect} from 'react'
import GetPost from '../api/GetPost'

const PostList=()=>{
  useEffect(()=>{
     const getAllPosts=()=>{
       const result=GetPost()
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