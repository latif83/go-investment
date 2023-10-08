"use client";
import { ParallaxProvider } from "react-scroll-parallax";

function Com({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}

export default Com;
