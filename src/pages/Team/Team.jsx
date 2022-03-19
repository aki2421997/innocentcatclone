import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Team.css";

const Team = () => {
  return (
    <div id="team">
      <div>
        <div className="team__top">
          <div className="heading">// CREATED BY MANY</div>
          <p
            style={{
              fontSize: "smaller",
              fontWeight: "300",
              color: "#e1e1e1",
              lineHeight: "20px",
            }}
          >
            A team with background in crypto
            <br />
            technology and fashion
            <br />
            Working to build decentralized brand of the future
          </p>
        </div>
        <div className="team__main">
          <Slider>
            <div>
              <img src="https://innocentcats.io/static/media/img-04.ab1f2e00efb92139ea65.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-01.103b55aff315be7c7f1a.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-02.63417d26bc5085fdecd0.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-03.cba0a348d768ea70f8b7.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-05.c7dfdb7b047f6de73765.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-02.358202193d4c1982feba.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-05.c08c3908a3431396a0d4.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-05.c08c3908a3431396a0d4.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-05.c08c3908a3431396a0d4.png"></img>
            </div>
            <div>
              <img src="https://innocentcats.io/static/media/img-05.c08c3908a3431396a0d4.png"></img>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
