import React, { useState, useEffect } from "react";
import { Dropdown, Icon, Button } from "react-materialize";
import { userRef } from "../firebase";
import moment from "moment";
import deletePost from "../api/deletePost";

export default () => {
  

  return (
    <div>
      <div className="outerBox m10 post">
        <div>
          <div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                    overflow: "hidden"
                  }}
                >
                  <img
                    src={
                      imageURL
                        ? imageURL
                        : "https://specials-images.forbesimg.com/imageserve/5d2388f14c687b00085c0f91/416x416.jpg?background=000000&cropX1=0&cropX2=1559&cropY1=130&cropY2=1690"
                    }
                    alt="profile photi"
                    height="100%"
                  />
                </div>
              </div>
              <div style={{ marginLeft: 10, flex: 1 }}>
                <div
                  style={{
                    color: "#385898",
                    fontWeight: 600
                  }}
                >
                  {firstName} {lastName}
                </div>
                <div style={{ fontSize: 12, color: "gray" }}>
                  
                </div>
              </div>
              
                <div>
                  <Dropdown
                    options={{
                      alignment: "left",
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      container: null,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }}
                    trigger={
                      <Button flat node="button">
                        <Icon>more_vert</Icon>
                      </Button>
                    }
                  >
                    <a href="w" style={{ color: "black" }}>
                      Edit
                    </a>
                    <a
                      href="w"
                      style={{ color: "black" }}
                      
                    >
                      Delete
                    </a>
                  </Dropdown>
                </div>
              
            </div>
          </div>
          <div>loreum ipsum ahhahshhss sjjsjsjsjs jjsjsjsjs</div>
        </div>
      </div>
    </div>
  );
};