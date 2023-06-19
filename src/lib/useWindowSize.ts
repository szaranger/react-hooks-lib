import { useState, useEffect } from "react";

export const breakpoints = {
  xs: 320,
  sm: 481,
  md: 769,
  lg: 1025,
  xl: 1201,
};

export const resolutions = {
  width: 0,
  set size(width: number) {
    this.width = width;
  },

  get xs() {
    return this.width <= breakpoints.xs;
  },
  get sm() {
    return this.width >= breakpoints.xs && this.width <= breakpoints.md;
  },
  get md() {
    return this.width >= breakpoints.md && this.width < breakpoints.lg;
  },
  get lg() {
    return breakpoints.lg && this.width < breakpoints.xl;
  },
  get xl() {
    return this.width >= breakpoints.xl;
  },

  isXS: (width: number) => width <= breakpoints.xs,
  isSM: (width: number) => width >= breakpoints.xs && width <= breakpoints.md,
  isMD: (width: number) => width >= breakpoints.md && width < breakpoints.lg,
  isLG: (width: number) => width >= breakpoints.lg && width < breakpoints.xl,
  isXL: (width: number) => width >= breakpoints.xl,
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
