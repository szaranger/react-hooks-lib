import React from "react";

import { useCarousel } from "../../lib/useCarousel";
import "./Carousel.css";

type ItemType = {
  children: React.ReactNode;
  width?: number;
};

type CarouselType = {
  children: React.ReactNode;
  isPaused?: boolean;
  withDots?: boolean;
};

export const Card = ({ children, width }: ItemType) => {
  return (
    <div className="carousel-card" style={{ width }}>
      {children}
    </div>
  );
};

export function Carousel({ children, isPaused, withDots }: CarouselType) {
  const { activeIndex, handlers, updateIndex, style } = useCarousel({
    children,
    isPaused,
  });

  const WithDots = () => {
    return React.Children.map(children, (_, index) => {
      return (
        <button
          className={`${
            index === activeIndex ? "carousel-dot active" : "carousel-dot"
          }`}
          onClick={() => {
            updateIndex(index);
          }}
        />
      );
    });
  };

  const WithButtons = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <div {...handlers} className="carousel-container">
      <div className="carousel" style={style}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement, {
            width: "100%",
          });
        })}
      </div>
      <div className="indicators">{withDots ? WithDots() : WithButtons()}</div>
    </div>
  );
}
