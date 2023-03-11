import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "./App.css";

import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export function Model(props) {
  const { nodes, materials } = useGLTF("/mybadge.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Curve006.geometry}
        material={materials["Material.001"]}
        scale={20}
      >
        <mesh
          geometry={nodes.Curve001.geometry}
          material={materials["SVGMat.001"]}
          position={[-0.03, -0.06, 0.008]}
          scale={0.75}
        />
        <mesh
          geometry={nodes.Curve002.geometry}
          material={materials["SVGMat.001"]}
          position={[-0.01, -0.06, 0.01]}
          scale={0.75}
        />
        <mesh
          geometry={nodes.Curve003.geometry}
          material={materials["SVGMat.001"]}
          position={[0.06, 0.01, 0.0035]}
          scale={0.75}
        />
        <mesh
          geometry={nodes.Curve004.geometry}
          material={materials["SVGMat.001"]}
          position={[0.06, 0.03, 0]}
          scale={0.75}
        />
        <mesh
          geometry={nodes.Curve005.geometry}
          material={materials.Material}
          scale={0.75}
          position={[0.0, 0.0, 0.005]}
        />
      </mesh>
    </group>
  );
}
function App() {
  return (
    <div
      className="App flex flex-col justify-center items-center"
      style={{ height: "100vh", width: "100vw", background: "black" }}
    >
      <span />
      <h1 style={{ marginTop: "auto", color: "white" }}>Penpal Badge</h1>

      <Canvas
        style={{ height: "100vh", width: "100vw", background: "black" }}
        pixelRatio={window.devicePixelRatio}
        gl={{ antialias: true }}
        background="black"
        gammaFactor={2.2}
        gammaOutput={2.2}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.01}>
            <directionalLight intensity={1} position={[1, 3, 50]} castShadow />
            <directionalLight intensity={1} position={[1, 3, -50]} castShadow />

            <Model />

            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              rotateSpeed={0.5}
              panSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </ambientLight>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
