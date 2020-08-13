import {postRef} from '../firebase'


export default (uid,content)=>{
  console.log('into the func')
  postRef.push({
    createdBy:uid,
    content:content
  })
}

