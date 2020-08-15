import React, { useState } from "react";
import { Textarea, Button, Row } from "react-materialize";
import { firebaseApp } from "../firebase";
import AddPost from "../api/AddPost";
export default () => {
  const [content,setContent]=useState('')
  const addAPost=()=>{
    if(!content){
      return;
    }
      const uid=firebaseApp.auth().currentUser.uid
      const output=AddPost(uid,content)
      if(output===true){
        setContent('')
        console.log('Post Added')
      }
      if(output===false){
        console.log('Post not Added')
      }
  }
  

  return (
    <div>
      <div className="outerBox m10 add">
        <h6 style={{ fontWeight: 500 }}>What's in your mind?</h6>
        {content}
        <Row style={{ marginBottom: 0 }}>
          <Textarea
            value={content}
            s={12}
            className="custom-textArea"
            placeholder="Write your post here..."
            onChange={e=>{
              setContent(e.target.value)
            }}
            
          />
        </Row>
        <div style={{ height: 0 }}>
          <Button
            small
            waves="light"
            style={{ background: "royalblue", marginTop: -60 }}
               onClick={addAPost}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};
