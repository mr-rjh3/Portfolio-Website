import './style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import moonImg from './resources/images/moon.jpg';
import moonNormalImg from './resources/images/normal.jpg';
import earthImg from './resources/images/earth.jpg';
import jupiterImg from './resources/images/jupiter.jpg';
import marsImg from './resources/images/mars.jpg';
import saturnImg from './resources/images/saturn.jpg';
import saturnRingImg from './resources/images/saturn-rings-top.png';
import saturnNormalImg from './resources/images/saturnNormal.jpg';
import spaceImg from './resources/images/space1.jpg';

const scene = new THREE.Scene(); // Create a new three.js scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Create a new three.js camera
const renderer = new THREE.WebGL1Renderer({ 
  canvas: document.querySelector('#bg'),
}); // Create a new three.js renderer

renderer.setPixelRatio(window.devicePixelRatio); // Sets the renderer pixel ratio to the current device's pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight);

// const controls = new OrbitControls(camera, renderer.domElement)
// camera.position.setZ(0.7);

const moonGeometry = new THREE.SphereGeometry(1); // create some torus geometry (ring looking thing)
const moonTexture = new THREE.TextureLoader().load(moonImg); // Loads the texture of the moon;
const moonNormalTexture = new THREE.TextureLoader().load(moonNormalImg);
const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture, normalMap: moonNormalTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const moon = new THREE.Mesh(moonGeometry, moonMaterial); // combines the material and the geometry
moon.position.set(-1,2.5,-6); // sets the position of the torus shape
scene.add(moon); // Adds the shape to the scene

const earthGeometry = new THREE.SphereGeometry(2) // create some geometry
const earthTexture = new THREE.TextureLoader().load(earthImg); // Loads the texture from the given path
const earthMaterial = new THREE.MeshStandardMaterial({map: earthTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const earth = new THREE.Mesh(earthGeometry, earthMaterial); // combines the material and the geometry
earth.position.set(2,0,-3.7);
earth.rotation.set(1,10,1);
scene.add(earth);

const coolStarGeometry = new THREE.TorusKnotGeometry(1, 0.1, 50, 10,20,12) // create some geometry
const coolStarMaterial = new THREE.MeshStandardMaterial({color: 0xf7ea9c}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const coolStar = new THREE.Mesh(coolStarGeometry, coolStarMaterial); // combines the material and the geometry
coolStar.position.set(3,-4,21);
scene.add(coolStar);

const marsGeometry = new THREE.SphereGeometry(1.5) // create some geometry
const marsTexture = new THREE.TextureLoader().load(marsImg); // Loads the texture from the given path
const marsMaterial = new THREE.MeshStandardMaterial({map: marsTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const mars = new THREE.Mesh(marsGeometry, marsMaterial); // combines the material and the geometry
mars.position.set(4,-2,9);
scene.add(mars);

const jupiterGeometry = new THREE.SphereGeometry(4.3) // create some geometry
const jupiterTexture = new THREE.TextureLoader().load(jupiterImg); // Loads the texture from the given path
const jupiterMaterial = new THREE.MeshStandardMaterial({map: jupiterTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial); // combines the material and the geometry
jupiter.position.set(-2.5,-4.5,46);
jupiter.rotation.x = Math.PI / 6;
scene.add(jupiter);

const saturnGeometry = new THREE.SphereGeometry(2) // create some geometry
const saturnTexture = new THREE.TextureLoader().load(saturnImg); // Loads the texture from the given path
const saturnMaterial = new THREE.MeshStandardMaterial({map: saturnTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial); // combines the material and the geometry
saturn.position.set(4,-9,55);
saturn.rotation.x = Math.PI / 2;
scene.add(saturn);

const saturnRingGeometry = new THREE.RingBufferGeometry(3, 5, 64) // create some geometry
var pos = saturnRingGeometry.attributes.position;
var v3 = new THREE.Vector3();
for (let i = 0; i < pos.count; i++){ // Updates the uv values of the geometry to properly map the texture to it
    v3.fromBufferAttribute(pos, i);
    saturnRingGeometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
}

const saturnRingTexture = new THREE.TextureLoader().load(saturnRingImg); // Loads the texture from the given path


const saturnRingMaterial = new THREE.MeshStandardMaterial({map: saturnRingTexture, side: THREE.DoubleSide, transparent:true}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial); // combines the material and the geometry
saturnRing.position.set(4,-9,55);
scene.add(saturnRing);

const pointLight = new THREE.PointLight(0xffffff, .5); // Point light only lights up a specific area
pointLight.position.set(-10,15,5);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // ambient light lights up a general area

scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight) // Indicates the pointLight position and direction in the scene when viewing on the website in the browser.
// const gridHelper = new THREE.GridHelper(200, 50) // draws a 2D grid along the scene
// scene.add(lightHelper, gridHelper)



const starGeometry = new THREE.SphereGeometry(0.2, 24, 24);
const starMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
function addStar() {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300)); // fills array with random floats in the range of -100 to 100
    star.position.set(x,y,z);
    scene.add(star);
}

Array(400).fill().forEach(addStar) // fills the scene with 200 stars

const spaceTexture = new THREE.TextureLoader().load(spaceImg);
scene.background = spaceTexture;

const topButton = document.getElementById("topButton");

function topFunction() {
    if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 100);
          document.body.scrollTo(0, document.body.scrollY - 100)
          topFunction();
        }, 10);
  }
}



function moveCameraOnScroll(){
    const t = document.body.getBoundingClientRect().top; // get the distance from the top of the webpage
    if(t < -300){ // if far enough from the top display the top button
        // fade the topButton in
        topButton.style.opacity = 1;
        topButton.onclick = topFunction;
        topButton.style.cursor = "pointer";
    }
    else{
        // fade the topButton out and stop it from being clicked
        topButton.style.opacity = 0;
        topButton.onclick = null;
        topButton.style.cursor = "default";
    }
    // moves and rotates the camera based on the distance from the top of the webpage

    camera.position.x = t * -0.0002;
    camera.rotation.x = t * 0.0005

    camera.position.y = t * -0.0002;
    camera.rotation.y = t * -0.00001

    camera.position.z = t * -0.01;
    camera.rotation.z = t * -0.0002

    //console.debug(t)

    // torus.rotation.x = t * 0.001;
    // torus.rotation.y = t * 0.003;
    // torus.rotation.z = t * 0.005;

    // earth.rotation.x = t * 0.002;
    // earth.rotation.y = t * 0.002;
    // earth.rotation.z = t * 0.001;
}
document.body.onscroll = moveCameraOnScroll // calls moveCamera function when user scrolls the mouse wheel


function animate(){ // infinite recursive loop to render our scene
    requestAnimationFrame(animate); // Tells browser that we want to animate something so it repaints the screen for us

    // Slowly rotate the torus shape each frame
    //moon.rotation.x += 0.005;
    moon.rotation.y += 0.002;
    //moon.rotation.z += 0.005;

    coolStar.rotation.x += 0.001;
    coolStar.rotation.y += 0.005;
    coolStar.rotation.z += 0.005;

    // earth.rotation.x += 0.00;
    earth.rotation.y += 0.001;
    mars.rotation.y += -0.001;
    jupiter.rotation.y += -0.001;
    saturn.rotation.y += 0.001;
    saturnRing.rotation.z += 0.001;
    //earth.rotation.z += 0.005;


    // controls.update(); // updates the camera from using the orbit controls
    renderer.render(scene, camera) // Renders the current scene with the given camera
}
animate()
