import * as THREE from 'three';

//checking entrice library
console.log(THREE);

//scene contatainer for other object
const scene =new THREE.Scene();



const cubeGeomtery=new THREE.BoxGeometry(1,1,1);
const cubeMaterial=new THREE.MeshBasicMaterial({color:0xff0000});



// adding mesh to scene
const cubeMesh=new THREE.Mesh(
  cubeGeomtery,
  cubeMaterial
)


scene.add(cubeMesh);


//initializing camera

const camera=new  THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
)


//postion of the camera
camera.position.z=3;


scene.add(camera);

//initializing renderer

const canvas=document.querySelector('.threejs');
const renderer=new THREE.WebGLRenderer({canvas});
//set window size
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);