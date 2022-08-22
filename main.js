import './style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene(); // Create a new three.js scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Create a new three.js camera
const renderer = new THREE.WebGL1Renderer({ 
  canvas: document.querySelector('#bg'),
}); // Create a new three.js renderer

renderer.setPixelRatio(window.devicePixelRatio); // Sets the renderer pixel ratio to the current device's pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement)
// camera.position.setZ(0.7);

const moonGeometry = new THREE.SphereGeometry(1); // create some torus geometry (ring looking thing)
const moonTexture = new THREE.TextureLoader().load('textures/moon.jpg'); // Loads the texture of the moon;
const moonNormalTexture = new THREE.TextureLoader().load('textures/normal.jpg');
const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture, normalMap: moonNormalTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const moon = new THREE.Mesh(moonGeometry, moonMaterial); // combines the material and the geometry
moon.position.set(-1,2.5,-6); // sets the position of the torus shape
scene.add(moon); // Adds the shape to the scene

const earthGeometry = new THREE.SphereGeometry(2) // create some geometry
const earthTexture = new THREE.TextureLoader().load('textures/earth.jpg'); // Loads the texture from the given path
const earthMaterial = new THREE.MeshStandardMaterial({map: earthTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const earth = new THREE.Mesh(earthGeometry, earthMaterial); // combines the material and the geometry
earth.position.set(2,0,-3.7);
earth.rotation.set(1,10,1);
scene.add(earth);

const coolStarGeometry = new THREE.TorusKnotGeometry(1, 0.1, 50, 10,20,12) // create some geometry
const coolStarMaterial = new THREE.MeshStandardMaterial({color: 0xdece71}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const coolStar = new THREE.Mesh(coolStarGeometry, coolStarMaterial); // combines the material and the geometry
coolStar.position.set(3,-4,21);
scene.add(coolStar);

const marsGeometry = new THREE.SphereGeometry(1.5) // create some geometry
const marsTexture = new THREE.TextureLoader().load('textures/mars.jpg'); // Loads the texture from the given path
const marsMaterial = new THREE.MeshStandardMaterial({map: marsTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const mars = new THREE.Mesh(marsGeometry, marsMaterial); // combines the material and the geometry
mars.position.set(4,-2,9);
scene.add(mars);

const jupiterGeometry = new THREE.SphereGeometry(4.3) // create some geometry
const jupiterTexture = new THREE.TextureLoader().load('textures/jupiter.jpg'); // Loads the texture from the given path
const jupiterMaterial = new THREE.MeshStandardMaterial({map: jupiterTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial); // combines the material and the geometry
jupiter.position.set(-2.5,-4.5,46);
scene.add(jupiter);

const saturnGeometry = new THREE.SphereGeometry(4) // create some geometry
const saturnTexture = new THREE.TextureLoader().load('textures/saturn.jpg'); // Loads the texture from the given path
const saturnMaterial = new THREE.MeshStandardMaterial({map: saturnTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial); // combines the material and the geometry
saturn.position.set(6,-23,63);
scene.add(saturn);

const saturnRingGeometry = new THREE.RingBufferGeometry(10, 6, 30) // create some geometry

var uvs = saturnRingGeometry.attributes.uv.array;
// loop and initialization taken from RingBufferGeometry
var phiSegments = saturnRingGeometry.parameters.phiSegments || 0;
var thetaSegments = saturnRingGeometry.parameters.thetaSegments || 0;
phiSegments = phiSegments !== undefined ? Math.max( 1, phiSegments ) : 1;
thetaSegments = thetaSegments !== undefined ? Math.max( 3, thetaSegments ) : 8;
for ( var c = 0, j = 0; j <= phiSegments; j ++ ) {
    for ( var i = 0; i <= thetaSegments; i ++ ) {
        uvs[c++] = i / thetaSegments,
        uvs[c++] = j / phiSegments;
    }
}

const saturnRingTexture = new THREE.TextureLoader().load('textures/saturn-rings-top.png'); // Loads the texture from the given path


const saturnRingMaterial = new THREE.ShaderMaterial({map: saturnRingTexture, side: THREE.DoubleSide, transparent: true}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial); // combines the material and the geometry
saturnRing.position.set(6,-23,63);
scene.add(saturnRing);

const pointLight = new THREE.PointLight(0xffffff); // Point light only lights up a specific area
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff); // ambient light lights up a general area

scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight) // Indicates the pointLight position and direction in the scene when viewing on the website in the browser.
// const gridHelper = new THREE.GridHelper(200, 50) // draws a 2D grid along the scene
// scene.add(lightHelper, gridHelper)



const starGeometry = new THREE.SphereGeometry(0.2, 24, 24);
const starMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
function addStar() {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200)); // fills array with random floats in the range of -100 to 100
    star.position.set(x,y,z);
    scene.add(star);
}

Array(400).fill().forEach(addStar) // fills the scene with 200 stars

const spaceTexture = new THREE.TextureLoader().load('textures/space1.jpg');
scene.background = spaceTexture;

const topButton = document.getElementById("topButton");

function topFunction() {
    if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 100);
          topFunction();
        }, 10);
  }
}

topButton.onclick = topFunction;

function moveCameraOnScroll(){
    const t = document.body.getBoundingClientRect().top; // get the distance from the top of the webpage
    if(t < -700) // if the distance is greater than 0 then scroll down
        topButton.style.display = "block";
    else
        topButton.style.display = "none";
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
    //earth.rotation.z += 0.005;


    // controls.update(); // updates the camera from using the orbit controls
    renderer.render(scene, camera) // Renders the current scene with the given camera
}
animate()
