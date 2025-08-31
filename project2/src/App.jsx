import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './style.css'
import * as THREE from 'three';
import { Scene } from './Scene.jsx';
const App = () => {
 
  return <>
    <div class="overlay"></div>
  <Canvas  className='z-20' camera={{fov:35}}>
    <OrbitControls />
    <ambientLight />
    <Scene/>
    
  </Canvas>
 
 <div className="name">
  <h1 className='text-9xl font-bold '>Priyanshu Pant</h1>
  <p className='text-2xl text-yellow-300 mt-5 font'>3D Cylinder with Texture</p>
  
 </div>
  
  </>
}

export default App