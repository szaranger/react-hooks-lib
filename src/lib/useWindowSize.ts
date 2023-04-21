import { useState, useEffect } from "react";

export const breakpoints = {
  xs: 320,
  sm: 481,
  md: 769,
  lg: 1025,
  xl: 1201
};

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function handleResize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
