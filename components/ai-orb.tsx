"use client"

import { Warp } from "@paper-design/shaders-react"

const ORB_PARAMS = {
  proportion: 0.35,
  softness: 1,
  distortion: 0.32,
  swirl: 1,
  swirlIterations: 0,
  shape: "edge" as const,
  shapeScale: 0,
  speed: 12.2,
  scale: 0.31,
  rotation: 176,
  offsetX: 0.65,
  offsetY: 0.09,
  colors: ["#ade7ff", "#ebf4ff", "#00bbff"],
}

export function AiOrb({ size = 280 }: { size?: number }) {
  return (
    <div
      className="rounded-full overflow-hidden"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Warp
        width={size}
        height={size}
        colors={ORB_PARAMS.colors}
        proportion={ORB_PARAMS.proportion}
        softness={ORB_PARAMS.softness}
        distortion={ORB_PARAMS.distortion}
        swirl={ORB_PARAMS.swirl}
        swirlIterations={ORB_PARAMS.swirlIterations}
        shape={ORB_PARAMS.shape}
        shapeScale={ORB_PARAMS.shapeScale}
        speed={ORB_PARAMS.speed}
        scale={ORB_PARAMS.scale}
        rotation={ORB_PARAMS.rotation}
        offsetX={ORB_PARAMS.offsetX}
        offsetY={ORB_PARAMS.offsetY}
      />
    </div>
  )
}
