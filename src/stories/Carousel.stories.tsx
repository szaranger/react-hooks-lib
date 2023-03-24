import React from "react";

import { Carousel, Item } from "./Carousel";

export default {
  title: "Hooks/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
};

export function Default() {
  return (
    <Carousel>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Carousel>
  );
}

export function Paused() {
  return (
    <Carousel isPaused>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Carousel>
  );
}
