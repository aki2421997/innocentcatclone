import React from "react";
import "./RoadMap.css";

const RoadMapItem = ({step,info}) => {
  return (
    <div className="roadmap__item">
      <p
        style={{
          fontSize: "11px",
          fontWeight: "400",
          color: "#e1e1e1",
          lineHeight: "20px"
        }}
      >
        {info}
      </p>
      <div style={{display: "flex", justifyContent:"space-between"}}>
        <div style={{fontWeight:"800",color:"rgb(144, 255, 0)",fontSize:"10px"}}>STEP {step} //</div>
        <div style={{display:"flex", width:"80%"}}>
          <div style={{ height: 7, width: 7, backgroundColor: "white" }}></div>
          <div
            style={{
              height: 1,
              width: "100%",
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
      <div className="roadmap__marker"></div>
      <div className="roadmap__marker"></div>
    </div>
  );
};

const RoadMap = () => {
  const roadMapInfo = [
      "We will be announcing our first collaboration with a Metaverse singer by 2022 Q1",
      "We are seeking for partnership to develop our Metaverse Live show, latest expected started time would be 2022 Q2",
      "The ticket for the Metaverse live show will be sold in the same way as in real life, one ticket on entry. However, Innocent Cats NTF holders will receive an airdrop from us which include the ticket to the show, while it can also be traded on Opensea",
      "Innocent Cats NFT will prioritise utilities and our collaborations with fantastic celebrities, we will provide our celebrities with one stop supreme services, from the selling of NFT to the establishment and design of our Metaverse concert venue, as well as comprehensive technical supports",
      "All the revenue we generated from the sales of the concert will 100% contributed to our celebrities, in order to establish a free streamline service for our celebrities and also to able to attract more celebrities to do partnership with us",
      "The more celebrities we collaborate with, the more airdrops we will sent out to our honourable Innocent Cats holders",
      "Our goal is to obtain the most valuable partnership from well-known celebrities all around the world  Ultimately to become the biggest Metaverse concert holder with superior management and distinctive services "
  ]
  return (
    <div id="roadmap">
      <div id="roadmap__top">
        <h1>
          Roadmap 1.0 Metaverse
          <br />
          Concert 2022 Q2
        </h1>
      </div>
      <div id="roadmap__main">
          {roadMapInfo.map((info,i) => <RoadMapItem key={i} step={i+1} info={info}/>)}
          <div id="roadmap__track"></div>
      </div>
    </div>
  );
};

export default RoadMap;
