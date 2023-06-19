import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { CarouselType } from "./index.d";

export function useCarousel({
  children = [],
  isPaused = false,
  transitionDelay = 500,
  delay = 5000,
}: CarouselType) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused] = useState(isPaused);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, delay);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex: number) => {
    const count = React.Children.count(children);
    if (newIndex < 0) {
      newIndex = count - 1;
    } else if (newIndex >= count) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const style = {
    transform: `translateX(-${activeIndex * 100}%)`,
    transition: `transform ${transitionDelay}ms`,
  };

  return { activeIndex, handlers, updateIndex, style };
}
