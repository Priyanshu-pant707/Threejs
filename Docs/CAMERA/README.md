# 📷 Camera in Three.js  

In **Three.js**, a camera defines **from where** and **how** the 3D scene is viewed.  
Without a camera, nothing will be visible, even if objects exist in the scene.  

---

## 1️⃣ Perspective Camera  

### Syntax
```js
const camera = new THREE.PerspectiveCamera(
   fov,
   aspect,
   near,
   far
);
```

- **fov** → Field of view (like zoom of your eyes/lens).  
- **aspect** → Usually `window.innerWidth / window.innerHeight`.  
- **near** → Minimum distance the camera can see.  
- **far** → Maximum distance the camera can see.  

### Example
```js
const camera = new THREE.PerspectiveCamera(
  75,                                // fov
  window.innerWidth / window.innerHeight, // aspect
  0.1,                               // near
  1000                               // far
);

camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);
```

---

## 2️⃣ Orthographic Camera  

### Syntax
```js
const camera = new THREE.OrthographicCamera(
  left,   // left boundary
  right,  // right boundary
  top,    // top boundary
  bottom, // bottom boundary
  near,   // near clipping plane
  far     // far clipping plane
);
```

- Unlike **PerspectiveCamera**, objects do **not shrink with distance**.  
- Useful for **2D-like scenes, CAD, and UI overlays**.  

### Example
```js
const aspect = window.innerWidth / window.innerHeight;
const d = 5; // zoom level

const camera = new THREE.OrthographicCamera(
  -d * aspect,  // left
   d * aspect,  // right
   d,           // top
  -d,           // bottom
   0.1,         // near
   1000         // far
);

camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);
```

---

## 3️⃣ Common Camera Properties  

Every camera in Three.js extends `THREE.Camera`, so they share these properties:

- **position** → Where the camera is in 3D space  
  ```js
  camera.position.set(x, y, z);
  ```

- **rotation** → Orientation of the camera in space  
  ```js
  camera.rotation.x = Math.PI / 4;
  ```

- **up** → Defines the "up" direction (default is Y-axis).  
  ```js
  camera.up.set(0, 1, 0);
  ```

- **lookAt()** → Makes the camera look at a specific point  
  ```js
  camera.lookAt(new THREE.Vector3(0,0,0));
  ```

- **near & far** → Define the depth of the scene visible to the camera.  
  ```js
  camera.near = 0.1;
  camera.far = 2000;
  camera.updateProjectionMatrix();
  ```

- **zoom** → Works for OrthographicCamera and PerspectiveCamera  
  ```js
  camera.zoom = 2;
  camera.updateProjectionMatrix();
  ```

- **aspect** → Aspect ratio for correct rendering  
  ```js
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  ```

- **projectionMatrix** → Internally stores how 3D points are projected to 2D screen.  

---

## 🎯 Full Example (Perspective + Cube)
```js
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera (Perspective)
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.set(0, 0, 5);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animate
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```
