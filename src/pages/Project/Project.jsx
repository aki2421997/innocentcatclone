import React from "react";
import { useDevice } from "../../hooks/useDevice";
import { getDeviceType } from "../../utils/device";
import "./Project.css";

const Project = () => {
  const { isMobile, isTab } = useDevice();
  return (
    <div id="project">
      <div className="project__main">
        <div className="project_left">
          {isMobile && isTab && (
            <h1 style={{ color: "#90ff00", margin: 0, marginBottom: 10 }}>
              WELCOME TO THE INNOCENT CATS
            </h1>
          )}
          <img
            style={{ width: "100%" }}
            src="https://innocentcats.io/static/media/img-05.c7dfdb7b047f6de73765.png"
          />
        </div>
        <div className="project_right">
          <div className="project__img-flex">
            <img src="https://innocentcats.io/static/media/img-01.103b55aff315be7c7f1a.png" />
            <img src="https://innocentcats.io/static/media/img-02.63417d26bc5085fdecd0.png" />
            <img src="https://innocentcats.io/static/media/img-03.cba0a348d768ea70f8b7.png" />
          </div>
          {!isMobile && !isTab  && (
            <h1 style={{ color: "#90ff00", margin: 0, marginBottom: 10 }}>
              WELCOME TO THE INNOCENT CATS
            </h1>
          )}
          {!isMobile && !isTab && (
            <>
              <div>INNOCENT CATS NFTS_</div>
              <p
                style={{
                  fontSize: "smaller",
                  fontWeight: "300",
                  color: "#e1e1e1",
                  lineHeight: "20px",
                }}
              >
                unique digital collectibles living on the Ethereum blockchain
                <br />
                Your innocent cats nfts doubles as your
                <br />
                innocent Club membership card
                <br />
                More benefits can be unlocked and activated in the future
              </p>
              <h1
                style={{
                  color: "rgb(144, 255, 0)",
                  letterSpacing: "7px",
                  margin: "0px 0px 10px",
                  fontWeight: "500",
                  border: "4px solid rgb(144, 255, 0)",
                  lineHeight: "46px",
                  marginRight: "21px",
                  padding: "20px 112px",
                  alignContent: "center",
                }}
              >
                VIEW IN OPENSA
              </h1>
            </>
          )}
        </div>
      </div>
      <div className="project__info">
        <div>INNOCENT CATS NFTS_</div>
        <p
          style={{
            fontSize: "smaller",
            fontWeight: "300",
            color: "#e1e1e1",
            lineHeight: "20px",
          }}
        >
          unique digital collectibles living on the Ethereum blockchain
          <br />
          Your innocent cats nfts doubles as your
          <br />
          innocent Club membership card
          <br />
          More benefits can be unlocked and activated in the future
        </p>
        <h1
          style={{
            color: "#90ff00",
            border: "2px solid #90ff00",
            letterSpacing: 6,
          }}
        >
          VIEW IN OPENSA
        </h1>
      </div>
      <div className="project__bottom">
        <div className="project__bottom__left">INNOCENT CATS NFTS</div>
        <div className="project__bottom__right">
          <div style={{ height: 7, width: 7, backgroundColor: "white" }}></div>
          <div
            style={{
              height: 1,
              width: 80,
              backgroundColor: "white",
              marginTop: 3,
            }}
          ></div>
          <div style={{ height: 7, width: 7, backgroundColor: "white" }}></div>
          <div
            style={{
              height: 7,
              width: 7,
              backgroundColor: "black",
              border: "2.5px solid white",
              boxSizing: "border-box",
              marginLeft: 20,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
