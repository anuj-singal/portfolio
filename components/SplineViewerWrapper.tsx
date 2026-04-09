"use client";

import { useEffect, useRef } from "react";

const SplineViewerWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current; // ✅ capture ref

    // dynamically load Spline script
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.12.74/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    // create Spline viewer element
    const viewer = document.createElement("spline-viewer") as HTMLElement;
    viewer.setAttribute(
      "url",
      "https://prod.spline.design/19H4fIcp4dPX2XfY/scene.splinecode"
    );
    viewer.style.width = "100%";
    viewer.style.height = "100%";

    container?.appendChild(viewer);

    return () => {
      document.body.removeChild(script);
      if (container) container.innerHTML = ""; // ✅ use captured ref
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default SplineViewerWrapper;