import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

const Slider = ({ children }) => {
  const length = children.length;
  const sliderRef = useRef(null);
  let initialPoint;
  let initialTransX = 0;

  const handleTouchStart = (evt) => {
    sliderRef.current.style.setProperty("--transitiontime", `0ms`);
    initialPoint = evt.changedTouches[0].clientX;
    initialTransX = getComputedStyle(sliderRef.current).getPropertyValue(
      "--translatelen"
    );
  };

  const handleTouchMove = (evt) => {
    const diff = evt.changedTouches[0].clientX - initialPoint; // target-src
    sliderRef.current.style.setProperty(
      "--translatelen",
      `${parseInt(initialTransX) + diff}px`
    );
  };

  const handleTouchEnd = (evt) => {
    const sliderItemWidth =  sliderRef.current.firstElementChild.clientWidth;
    const diff = evt.changedTouches[0].clientX - initialPoint; // target-src
    let n = diff<0 ? Math.floor(diff/sliderItemWidth) :Math.ceil(diff/sliderItemWidth);
    handleTransition(n);
    sliderRef.current.style.setProperty("--transitiontime", `0ms`);
    sliderRef.current.style.setProperty("--translatelen", `${-Math.floor(length/3)*sliderItemWidth}px`);
    for (const ele of sliderRef.current.childNodes) {
        ele.classList.remove("active");
    }
    sliderRef.current.childNodes[Math.ceil(length/2)-1].classList.add("active");
  };

  const handleTransition = (n) => {
    for (let index = 0; index < Math.abs(n); index++) {
        if(n<0)
            sliderRef.current.appendChild(sliderRef.current.firstElementChild);
        else
            sliderRef.current.insertBefore(sliderRef.current.lastElementChild,sliderRef.current.firstChild)    
    }
  };

  useEffect(() => {
    sliderRef.current.childNodes[Math.ceil(length/2)-1].classList.add("active");
    sliderRef.current.style.setProperty("--translatelen", `${-(Math.floor(length/3))*sliderRef.current.firstElementChild.clientWidth}px`);
    sliderRef.current.addEventListener("touchstart", handleTouchStart, false);
    sliderRef.current.addEventListener("touchmove", handleTouchMove, false);
    sliderRef.current.addEventListener("touchend", handleTouchEnd, false);
  }, []);

  return (
    <div className="slider--wrap">
      <div ref={sliderRef} className="slider">
        {children}
      </div>
    </div>
  );
};

export default Slider;
