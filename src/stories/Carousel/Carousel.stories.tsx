import React from "react";

import { Carousel, Card } from "./Carousel";

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
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
    </Carousel>
  );
}

export function Paused() {
  return (
    <Carousel isPaused>
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
    </Carousel>
  );
}

export function WithDots() {
  return (
    <Carousel withDots>
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
    </Carousel>
  );
}
