"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Color, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: any;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings: number[] = [];

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<any[]>([]);
  const globeRef = useRef<any>(null);

  const defaultProps = useMemo(() => ({
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  }), [globeConfig]);

  // ✅ Build data ONCE
  useEffect(() => {
    const points: any[] = [];

    data.forEach((arc) => {
      const rgb = hexToRgb(arc.color)!;

      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) =>
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });

      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) =>
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    });

    const filtered = points.filter(
      (v, i, a) =>
        a.findIndex(
          (v2) => v2.lat === v.lat && v2.lng === v.lng
        ) === i
    );

    setGlobeData(filtered);
  }, [data]);

  // ✅ Init globe safely
    useEffect(() => {
      if (!globeRef.current || globeData.length === 0) return;

      const globe = globeRef.current;

      const mat = globe.globeMaterial();
      mat.color = new Color(defaultProps.globeColor);
      mat.emissive = new Color(defaultProps.emissive);
      mat.emissiveIntensity = defaultProps.emissiveIntensity;
      mat.shininess = defaultProps.shininess;

      globe
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => defaultProps.polygonColor);

      globe
        .arcsData(data)
        .arcStartLat((d: any) => d.startLat)
        .arcStartLng((d: any) => d.startLng)
        .arcEndLat((d: any) => d.endLat)
        .arcEndLng((d: any) => d.endLng)
        .arcColor((d: any) => d.color)
        .arcAltitude((d: any) => d.arcAlt)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashGap(15)
        .arcDashAnimateTime(defaultProps.arcTime);

      globe
        .pointsData(data)
        .pointColor((d: any) => d.color)
        .pointsMerge(true)
        .pointRadius(2);

    // ✅ ADD THIS LINE
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globeData, data]);

  // ✅ Rings animation
  useEffect(() => {
    if (!globeRef.current || globeData.length === 0) return;

    const interval = setInterval(() => {
      numbersOfRings = genRandomNumbers(
        0,
        globeData.length,
        Math.floor((globeData.length * 4) / 5)
      );

      globeRef.current.ringsData(
        globeData.filter((_, i) => numbersOfRings.includes(i))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [globeData]);

  return <threeGlobe ref={globeRef} />;
}

// ✅ Safe renderer config
function RendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // 🔥 limit
    gl.setSize(size.width, size.height);
    gl.setClearColor(0x000000, 0);
  }, [gl, size]);

  return null;
}

// ✅ FINAL WORLD COMPONENT
export function World(props: WorldProps) {
  const { globeConfig } = props;

  return (
    <Canvas
      camera={{ position: [0, 0, cameraZ], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]} // 🔥 prevents crash
    >
      <RendererConfig />

      <fog attach="fog" args={[0xffffff, 400, 2000]} />

      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />

      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={[-400, 100, 400]}
      />

      <directionalLight
        color={globeConfig.directionalTopLight}
        position={[-200, 500, 200]}
      />

      <pointLight
        color={globeConfig.pointLight}
        position={[-200, 500, 200]}
        intensity={0.8}
      />

      <Globe {...props} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

// utils
function hexToRgb(hex: string) {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return res
    ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16),
      }
    : null;
}

function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}