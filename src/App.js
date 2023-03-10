import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "./App.css";

import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/badged-transformed.glb");
  const { actions } = useAnimations(animations, group);
  useFrame(({ clock }) => {
    group.current.rotation.x = Math.PI / 2;
    group.current.rotation.z = clock.getElapsedTime() * 0.5;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Curve001"
          geometry={nodes.Curve001.geometry}
          material={materials["SVGMat.001"]}
          position={[0, 0, 0.23]}
          scale={10}
        />
        <mesh
          name="Curve002"
          geometry={nodes.Curve002.geometry}
          material={materials["SVGMat.001"]}
          position={[0, 0, 0.23]}
          scale={10}
        />
        <mesh
          name="Curve003"
          geometry={nodes.Curve003.geometry}
          material={materials["SVGMat.001"]}
          position={[0.22, 0, 0]}
          scale={10}
        />
        <mesh
          name="Curve004"
          geometry={nodes.Curve004.geometry}
          material={materials["SVGMat.001"]}
          position={[0.22, 0, 0]}
          scale={10}
        />
        <mesh
          name="Curve005"
          geometry={nodes.Curve005.geometry}
          material={materials.Material}
          scale={10}
        />
        <mesh
          name="Curve006"
          geometry={nodes.Curve006.geometry}
          material={materials["Material.001"]}
          position={[1.41, 0, -1.62]}
          scale={13.34}
        />
      </group>
    </group>
  );
}
function App() {
  return (
    <div
      className="App flex flex-col justify-center items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1 className="text-blue">HI</h1>
      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        pixelRatio={window.devicePixelRatio}
        gl={{ antialias: true }}
        color="black"
        camera={{ position: [0, 0, 20], fov: 20 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2}>
            <spotLight
              intensity={1}
              angle={0.5}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
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
