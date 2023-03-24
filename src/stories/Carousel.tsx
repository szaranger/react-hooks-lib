import React from "react";

import { useCarousel } from "../lib/useCarousel";
import "./Carousel.css";

type ItemType = {
  children: React.ReactNode;
  width?: number;
};

type CarouselType = {
  children: React.ReactNode;
  isPaused?: boolean;
};

export const Item = ({ children, width }: ItemType) => {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  );
};

export function Carousel({ children, isPaused }: CarouselType) {
  const { activeIndex, handlers, updateIndex, style } = useCarousel({
    children,
    isPaused,
  });

  return (
    <div {...handlers} className="carousel-container">
      <div className="carousel" style={style}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as any, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (_, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
