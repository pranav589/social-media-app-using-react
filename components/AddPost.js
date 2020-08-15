import React, { useState } from "react";
import { Textarea, Button, Row } from "react-materialize";
import { firebaseApp } from "../firebase";
import addPost from "../api/addPost";
export default () => {
  

  return (
    <div>
      <div className="outerBox m10 add">
        <h6 style={{ fontWeight: 500 }}>What's in your mind?</h6>
        <Row style={{ marginBottom: 0 }}>
          <Textarea
            
            s={12}
            className="custom-textArea"
            placeholder="Write your post here..."
            data-length={120}
            
          />
        </Row>
        <div style={{ height: 0 }}>
          <Button
            small
            waves="light"
            style={{ background: "royalblue", marginTop: -60 }}
              >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};