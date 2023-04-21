import React from "react";

import { breakpoints, useWindowSize } from "../../lib/useWindowSize";

function Window() {
  const [width] = useWindowSize();
  const isSmallMobile = width <= breakpoints.xs;
  const isMobile = width <= breakpoints.md && width >= breakpoints.xs;
  const isTablet = width < breakpoints.lg && width >= breakpoints.md;

  const Content = () => (
    <p style={{ margin: "1rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );

  if (isSmallMobile) {
    return <div style={{ backgroundColor: "blue" }}>{Content()}</div>;
  }

  if (isMobile) {
    return <div style={{ backgroundColor: "green" }}>{Content()}</div>;
  }

  if (isTablet) {
    return <div style={{ backgroundColor: "red" }}>{Content()}</div>;
  }

  return <div>{Content()}</div>;
}

export default {
  title: "Hooks/WindowSize",
  component: Window,
  parameters: {
    layout: "fullscreen",
  },
};

export function Default() {
  return <Window />;
}
