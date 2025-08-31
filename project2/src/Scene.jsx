import React ,{useRef}from 'react'
import {useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
export const Scene = () => {
    let tex=useTexture('/2.webp');
    let cyl=useRef(null);
    useFrame((state,delta)=>{
        cyl.current.rotation.y+=delta*0.2;
       
    });
  return <group ref={cyl}>
    <mesh  rotation={[0,1.4,0.5]}>
        <cylinderGeometry args={[1,1,1,60,60,true]}  />
        <meshStandardMaterial  map={tex} side={THREE.DoubleSide}/>
  
      </mesh>
  </group>
}
