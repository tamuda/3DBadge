/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 mybadge.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/mybadge.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve006.geometry} material={materials['Material.001']} scale={13.34}>
        <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.001']} position={[-0.03, -0.06, 0.01]} scale={0.75} />
        <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.001']} position={[-0.01, -0.06, 0.01]} scale={0.75} />
        <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.001']} position={[0.06, 0.01, 0]} scale={0.75} />
        <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.001']} position={[0.06, 0.03, 0]} scale={0.75} />
        <mesh geometry={nodes.Curve005.geometry} material={materials.Material} scale={0.75} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/mybadge.glb')
