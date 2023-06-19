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
      <Card>
        <div style={{ backgroundColor: "blue" }}>Item 1</div>
      </Card>
      <Card>
        <div style={{ backgroundColor: "green" }}>Item 2</div>
      </Card>
      <Card>
        <div style={{ backgroundColor: "red" }}>Item 3</div>
      </Card>
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
