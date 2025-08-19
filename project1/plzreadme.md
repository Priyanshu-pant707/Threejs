# scene
  -- three.js me scene ek container (dabba) jaisa hota 
  -- jisme tum ek object(cube,sphere,models),lights(torch,bulb,sunlight) aur camera (like tum jo scene ko dekhega) rakhte ho

  

## real life example of scene:
  1. stage=scene
  2. actors=objects
  3. light=stage ki lightings
  4. aur jo audience dekh rhe ho=camera


  command to create scene is :  " const scene=new THREE.Scene()";

### summary of scene: 
-scene is like a container where you put some kind of object lights and camera to be rendered.
-scene ek khali world h jisme tim apni 3d duniya bnate ho.


---

# camera
   --ab scene banane ke bad hume usko dekhna bhi hota h,to camera is just like eye jo ki use scene ko dekhta h.

 ###  AB THREE JS MEIN CAMERA EK BASE CLASS H TOH HUM DIRECTLY USKO USE NHI KR SKTE: toh fir chalo type camera dekhte h:
      -> persepectiveCamera :just like real world (real 3d hoga jo dur hoga vo chota dikhega).
      -> orthographicCamera : isme apko 2d view jasa kuch dikhta h (sari chije lg bhg similar lagegi ,distance dosen't really matter).

 ### camera properties-
   -> .isCamera =simple just like flag ,check karega ki object  camera h ki nhi yes/no.
   -> .layers->tum object ko multiple layers mai rkh skte ho but camera ko khali vhi object dikhega jiski layer same hogi
   ->.matrixWorldInverse →
          Ye camera ka position aur rotation world me represent karta hai.
          Matlab camera kidhar rakha hai aur kidhar dekh raha hai.

---


 # Renderer:
      -it is just like a painter (jo hum kuch bnate h ye usko window pe paint kr deta h)

### quick recap-
  -   scene=stage
  -   camera=audience ki ankhe
  -   renderer= painter(jo camera ne jo dekha ,usko tumhare monitor pe draw karega)


      ##  How it works?
        1. "renderer.render(scene, camera);"  tum basically scene aur camera ko pass kr dete ho ki painter bhai scene aur camera ko dikha do 

        2. rederer WebGL use krta hai(jo ki gpu ke sath directly kam krta h) aur hr ek pixel ko paint karta hai.

        3. renderer bnane ka tarika 
          "
          const renderer = new THREE.WebGLRenderer(); 
          renderer.setSize(window.innerWidth, window.innerHeight); 
          document.body.appendChild(renderer.domElement);
          "
          Isme kya ho raha hai usko samjho:
              WebGLRenderer() → Ek painter ban gaya.
              setSize() → Kitni badi canvas (drawing area) chahiye.
              appendChild(renderer.domElement) → Renderer ek <canvas> banata hai aur usko HTML me add karta hai, taki tum dekh sako.