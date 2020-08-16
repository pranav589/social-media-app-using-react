import React,{useEffect,useState} from 'react'
import GetPost from '../api/GetPost'
import {postRef,firebaseApp} from '../firebase'
import SinglePost from './SinglePost'


const PostList=()=>{

  const [posts,setPosts]=useState([])
  const [myUid,setMyUid]=useState('')
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
         const uid=firebaseApp.auth().currentUser.uid
         setMyUid(uid)
         fetchedPosts.reverse()
         setPosts(fetchedPosts)
       })
     }
      getAllPosts()
     
  },[])
  
  return(
    <div>
      {posts.map(singlePost=><SinglePost details={singlePost} myUid={myUid} key={singlePost.postKey}/>)}
    </div>
  )
}

export default PostList