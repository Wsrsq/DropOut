"use client";

import mermaid from "mermaid";
import { useEffect, useRef } from "react";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "strict",
});

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderChart = async () => {
      if (!ref.current) return;

      try {
        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        // Use innerHTML with sanitized SVG from mermaid.render
        // biome-disable-next-line security/noInnerHtml
        ref.current.innerHTML = svg;
      } catch {
        // Invalid chart definition, render nothing
        if (ref.current) {
          ref.current.innerHTML = "";
        }
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div className="not-prose my-6">
      <div ref={ref} className="mermaid" />
    </div>
  );
}
