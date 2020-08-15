import {postRef} from '../firebase'


export default (uid,content)=>{
  console.log('into the func')
  try{
  postRef.push({
    createdBy:uid,
    content:content
  })
  return true
  }catch(error){
    console.log(error)
    return false
  }
}

