import React, { useEffect, useRef, useState } from "react";
import Home from "./Home/Home";
import Project from "./Project/Project";
import RoadMap from "./Roadmap/RoadMap";
import Team from "./Team/Team";
import "./App.css";

const twitterIcon =
  "data:image/png;base64,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";
const maskIcon =
  "data:image/png;base64,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";
const boastIcon =
  "https://innocentcats.io/static/media/icon-opensea.67179f28daee2ca23f9a.png";

const WelcomeVideo = ({ setVideo }) => {
  const videoRef = useRef(null);

  const handleVideo = () => {
    setVideo((video) => !video);
  };

  useEffect(() => {
    videoRef.current.addEventListener("ended", handleVideo);
  }, []);

  const style = {
    height: "100vh",
    width: "100vw",
    left: 0,
    top: 0,
    position: "absolute",
    objectFit: "fill",
  };
  // ./static/media/mainScene_mobile.e04e9aa78d63405556cf.mp4
  return (
    <video ref={videoRef} style={style} autoPlay muted>
      <source
        src="https://innocentcats.io/static/media/video_mobile.c31f685dbfcbdf89721a.mp4"
        type="video/mp4"
      />
    </video>
  );
};

const App = () => {
  const [video, setVideo] = useState(true);

  return (
    <div>
      {video && <WelcomeVideo video={video} setVideo={setVideo} />}
      {!video && (
        <>
          <Home />
          <Project />
          <Team />
          <RoadMap />
          <div id="app_footer">
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginLeft: "10%" }}>
                <div
                  style={{ height: 7, width: 7, backgroundColor: "white" }}
                ></div>
                <div
                  style={{
                    height: 1,
                    width: 80,
                    backgroundColor: "white",
                    marginTop: 3,
                  }}
                ></div>
                <div
                  style={{ height: 7, width: 7, backgroundColor: "white" }}
                ></div>
              </div>
              <p style={{ color: "white", margin: "0px", fontSize: "small", marginLeft: "10%" }}>
                SPEED CHECK
              </p>
            </div>
            <div className="footer--flex">
              <p>
                // INNOCENT CATS CLUB_
                <br />© 2022 INNOCENT. All rights reserved.
              </p>
              <div>
                <img src={twitterIcon} />
                <img src={maskIcon} />
                <img src={boastIcon} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
