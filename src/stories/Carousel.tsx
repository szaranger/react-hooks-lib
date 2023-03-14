import React from "react";

import { useCarousel } from "../lib/useCarousel";
import "./Carousel.css";

export const Item = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const { activeIndex, handlers, updateIndex, style } = useCarousel({
    children,
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

Carousel.Item = Item;

export default Carousel;
