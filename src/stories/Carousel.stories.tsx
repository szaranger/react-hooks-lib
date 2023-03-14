import React from "react";

import Carousel from "./Carousel";

export default {
  title: "Hooks/Carousel",
  component: Carousel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Default = () => (
  <Carousel>
    <Carousel.Item>Item 1</Carousel.Item>
    <Carousel.Item>Item 2</Carousel.Item>
    <Carousel.Item>Item 3</Carousel.Item>
  </Carousel>
);
