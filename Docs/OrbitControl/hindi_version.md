# OrbitControl in  Three.js
-- soch ki tume apne game ya 3d model ko mouse se ghuma,zoom,aur pan kar paaye-whi orbitcontrols ka kam h.

ye basically ek camera ko control krne ka ek tool h.

-- tumhe isko import krna padega kyuki ye ek addon h.
-- orbitcontrol three.js ke core part me nhi hota.
-- this is the reason you have to import it  by side.

# basic example

```js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Renderer (screen banata hai)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 20, 100);

// OrbitControls (camera ko mouse se control karne ke liye)
const controls = new OrbitControls(camera, renderer.domElement);

// Animate
function animate() {
  requestAnimationFrame(animate);

  controls.update(); // important for smooth movement

  renderer.render(scene, camera);
}
animate();

```


## Important Properties
- enableRotate -> ye btayega ki tum camera ghuma sakte ho ya nhi.
- enableZoom -> kya zoom allowed h .
- enablePan -> camera ko slide kr sakte ho ya nhi.
- enableDamping -> ye ek smooth effect dena ka kam karega.
- autoRotate -> Camera apne app ghoomega.
- autoRotateSpeed -> kiss speed se ghumana h ye batyega.
- minDistance/maxDistance -> Zoom kitna karien .
- minPolarAngle/maxPolarAngle -> upar-niche camera kitna ghoom sake.


# Events
- change -jab camera move hota h.
- start -  jab mouse drag start hota h.
- end - jab mouse drag khatam hota h.


# Methods
- .update() ->har frame me call karna zaroori hota h(agar app autoRotate/damping use kar rhe ho).
- .reset() ->camera  ko wapas starting postion me le aata hai.
- .saveState() ->Current camera position save kro.
- .getAzimuthalAngle() ->kitna  left right ghuma hai.
- .getPolarAngle() -> kitna upar niche ghuma h.




# summary of orbitControl 
 - OrbitControl tumahre 3d world ke camera ko mouse+keyboard se move /zoom/pan karne ki power deta h.
 - jaise video games me hota hai - tumhare camera ko free control mil jata hai.
 