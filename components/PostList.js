import React,{useEffect,useState} from 'react'
import GetPost from '../api/GetPost'
import {postRef} from '../firebase'
import SinglePost from './SinglePost'

const PostList=()=>{

  const [posts,setPosts]=useState([])
  useEffect(()=>{
     const getAllPosts=async ()=>{
        postRef.on('value',snap=>{
          var fetchedPosts=[]
         snap.forEach(singlePost=>{
           fetchedPosts.push({
             ...singlePost.val(),
             postKey:singlePost.key
           })
         })
         setPosts(fetchedPosts)
       })
     }
      getAllPosts()
     
  },[])
  
  return(
    <div>
      {posts.map(singlePost=><SinglePost details={singlePost}/>)}
    </div>
  )
}

export default PostList