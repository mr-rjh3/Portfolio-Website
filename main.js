import './style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import rileyImg from './resources/images/riley.png';
import cardcadeImg from './resources/images/cardcade.png';
import rbcImg from './resources/images/rbc.png';
import studyBuddyImg from './resources/images/studyBuddy.png';
import sentimentImg from './resources/images/sentiment.png';

import moonImg from './resources/images/moon.jpg';
import moonNormalImg from './resources/images/normal.jpg';
import earthImg from './resources/images/earth.jpg';
import jupiterImg from './resources/images/jupiter.jpg';
import marsImg from './resources/images/mars.jpg';
import saturnImg from './resources/images/saturn.jpg';
import saturnRingImg from './resources/images/saturn-rings-top.png';
import uranusImg from './resources/images/uranus.jpg';
import neptuneImg from './resources/images/neptune.jpg';
import plutoImg from './resources/images/pluto.jpg';
import sunImg from './resources/images/sun.jpg';

import spaceImg from './resources/images/space1.jpg';

const scene = new THREE.Scene(); // Create a new three.js scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Create a new three.js camera
const renderer = new THREE.WebGL1Renderer({ 
  canvas: document.querySelector('#bg'),
}); // Create a new three.js renderer

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}


renderer.setPixelRatio(window.devicePixelRatio); // Sets the renderer pixel ratio to the current device's pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement)
// camera.position.setZ(0.7);

const rileyGeometry = new THREE.BoxGeometry(0.01,1.5,1.5) // create some torus geometry (ring looking thing)
const rileyTexture = new THREE.TextureLoader().load(rileyImg); // Loads the texture of the moon;
const rileyMaterial = new THREE.MeshBasicMaterial({map: rileyTexture});
const riley = new THREE.Mesh(rileyGeometry, rileyMaterial);
riley.position.set(2,-1,11);
scene.add(riley)

const cardcadeGeometry = new THREE.BoxGeometry(1.5,0.01,1.5) // create some torus geometry (ring looking thing)
const cardcadeTexture = new THREE.TextureLoader().load(cardcadeImg); // Loads the texture of the moon;
const cardcadeMaterial = new THREE.MeshBasicMaterial({map: cardcadeTexture});
const cardcade = new THREE.Mesh(cardcadeGeometry, cardcadeMaterial);
cardcade.position.set(2,-2,26);
scene.add(cardcade)

const rbcGeometry = new THREE.BoxGeometry(1.2,1,0.01) // create some torus geometry (ring looking thing)
const rbcTexture = new THREE.TextureLoader().load(rbcImg); // Loads the texture of the moon;
const rbcMaterial = new THREE.MeshBasicMaterial({map: rbcTexture});
const rbc = new THREE.Mesh(rbcGeometry, rbcMaterial);
rbc.position.set(-.8,-0.5,39.2);
scene.add(rbc)

const studyBuddyGeometry = new THREE.BoxGeometry(1,0.01,1) // create some torus geometry (ring looking thing)
const studyBuddyTexture = new THREE.TextureLoader().load(studyBuddyImg); // Loads the texture of the moon;
const studyBuddyMaterial = new THREE.MeshBasicMaterial({color: 0xffffff ,map: studyBuddyTexture});
const studyBuddy = new THREE.Mesh(studyBuddyGeometry, studyBuddyMaterial);
studyBuddy.position.set(0.3,-1,40);
scene.add(studyBuddy)

const sentimentGeometry = new THREE.BoxGeometry(0.01,1,1) // create some torus geometry (ring looking thing)
const sentimentTexture = new THREE.TextureLoader().load(sentimentImg); // Loads the texture of the moon;
const sentimentMaterial = new THREE.MeshBasicMaterial({map: sentimentTexture});
const sentiment = new THREE.Mesh(sentimentGeometry, sentimentMaterial);
sentiment.position.set(1.5,-1,48.5);
scene.add(sentiment)

const sunGeometry = new THREE.SphereGeometry(10) // create some geometry
const sunTexture = new THREE.TextureLoader().load(sunImg); // Loads the texture from the given path
const sunMaterial = new THREE.MeshStandardMaterial({map: sunTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const sun = new THREE.Mesh(sunGeometry, sunMaterial); // combines the material and the geometry
sun.position.set(-40,30,-70);

scene.add(sun);

const moonGeometry = new THREE.SphereGeometry(1); // create some torus geometry (ring looking thing)
const moonTexture = new THREE.TextureLoader().load(moonImg); // Loads the texture of the moon;
const moonNormalTexture = new THREE.TextureLoader().load(moonNormalImg);
const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture, normalMap: moonNormalTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const moon = new THREE.Mesh(moonGeometry, moonMaterial); // combines the material and the geometry
moon.position.set(0.5,3,-7); // sets the position of the torus shape
scene.add(moon); // Adds the shape to the scene

const earthGeometry = new THREE.SphereGeometry(2) // create some geometry
const earthTexture = new THREE.TextureLoader().load(earthImg); // Loads the texture from the given path
const earthMaterial = new THREE.MeshStandardMaterial({map: earthTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const earth = new THREE.Mesh(earthGeometry, earthMaterial); // combines the material and the geometry
earth.position.set(2.5,0,-4.5);
earth.rotation.y = 200;
scene.add(earth);

const marsGeometry = new THREE.SphereGeometry(1.5) // create some geometry
const marsTexture = new THREE.TextureLoader().load(marsImg); // Loads the texture from the given path
const marsMaterial = new THREE.MeshStandardMaterial({map: marsTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const mars = new THREE.Mesh(marsGeometry, marsMaterial); // combines the material and the geometry
mars.position.set(6,-2,5);
scene.add(mars);

const jupiterGeometry = new THREE.SphereGeometry(4.3) // create some geometry
const jupiterTexture = new THREE.TextureLoader().load(jupiterImg); // Loads the texture from the given path
const jupiterMaterial = new THREE.MeshStandardMaterial({map: jupiterTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial); // combines the material and the geometry
jupiter.position.set(5,-8,19);
jupiter.rotation.x = Math.PI / 1.5;
scene.add(jupiter);

const saturnGeometry = new THREE.SphereGeometry(2) // create some geometry
const saturnTexture = new THREE.TextureLoader().load(saturnImg); // Loads the texture from the given path
const saturnMaterial = new THREE.MeshStandardMaterial({map: saturnTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial); // combines the material and the geometry
saturn.position.set(4,-9,55);
saturn.rotation.x = Math.PI / 2;
scene.add(saturn);

const uranusGeometry = new THREE.SphereGeometry(2) // create some geometry
const uranusTexture = new THREE.TextureLoader().load(uranusImg); // Loads the texture from the given path
const uranusMaterial = new THREE.MeshStandardMaterial({map: uranusTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial); // combines the material and the geometry
uranus.position.set(-2,5,66);
// uranus.rotation.x = 180;
uranus.rotation.z = Math.PI / 2;
scene.add(uranus);

const neptuneGeometry = new THREE.SphereGeometry(2) // create some geometry
const neptuneTexture = new THREE.TextureLoader().load(neptuneImg); // Loads the texture from the given path
const neptuneMaterial = new THREE.MeshStandardMaterial({map: neptuneTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial); // combines the material and the geometry
neptune.position.set(1,-2,80);
neptune.rotation.z = Math.PI / 2;
scene.add(neptune);

const plutoGeometry = new THREE.SphereGeometry(1) // create some geometry
const plutoTexture = new THREE.TextureLoader().load(plutoImg); // Loads the texture from the given path
const plutoMaterial = new THREE.MeshStandardMaterial({map: plutoTexture}); // Create a material for the geometry to use. Takes color and if wireframe is set to true then you can see the poligonal structure of the shape
const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial); // combines the material and the geometry
pluto.position.set(0,5,100);
pluto.rotation.z = Math.PI / 2;
scene.add(pluto);

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
    window.scrollTo({top: 0, behavior: 'smooth'});
}


var visible = false;
function moveCameraOnScroll(){
    const t = document.body.getBoundingClientRect().top; // get the distance from the top of the webpage
    if(t < -500){ // if far enough from the top display the top button
        // bring topButton in
        topButton.style.transform = "scale(1)";
        topButton.onclick = topFunction;
        topButton.style.cursor = "pointer";
        visible = true;
        
        
    }
    else{
        //  get rid of topButton and stop it from being clicked
        topButton.style.transform = "scale(0)";
        topButton.onclick = null;
        topButton.style.cursor = "default";
        visible = false;
        
        
    }
    // moves and rotates the camera based on the distance from the top of the webpage

    camera.position.x = t * -0.0002;
    camera.rotation.x = t * 0.0005

    camera.position.y = t * -0.0002;
    camera.rotation.y = t * -0.00001

    camera.position.z = t * -0.01;
    camera.rotation.z = t * -0.0002

    // Rotates the images while scrolling
    riley.rotation.x = t * 0.003;
    riley.rotation.y = t * 0.003;
    riley.rotation.z = t * 0.002;
    
    cardcade.rotation.x = t * 0.001;
    cardcade.rotation.y = t * 0.015;
    cardcade.rotation.z = t * 0.0055;
    
    rbc.rotation.x = t * 0.003;
    // rbc.rotation.y = t * 0.00;
    rbc.rotation.z = t * 0.001;
    
    studyBuddy.rotation.x = t * 0.002;
    studyBuddy.rotation.y = t * 0.002;
    studyBuddy.rotation.z = t * 0.001;
    
    sentiment.rotation.x = t * 0.00017;
    sentiment.rotation.y = t * 0.0028;
    sentiment.rotation.z = t * 0.00499;
    
}
document.body.onscroll = moveCameraOnScroll // calls moveCamera function when user scrolls the mouse wheel


function animate(){ // infinite recursive loop to render our scene
    requestAnimationFrame(animate); // Tells browser that we want to animate something so it repaints the screen for us

    if(topButton.matches(":hover") && visible){ // if the topButton is hovered over while it is visible do animation
        topButton.style.transform = "scale(1.05) rotate(360deg)";
    }
    else if(visible){   // if the button is visible but not hovered over revert to original transform 
        topButton.style.transform = "scale(1) rotate(0deg)";
    }

    // Slowly rotate the planets each frame

    moon.rotation.y += 0.003;
    earth.rotation.y += 0.0005;
    mars.rotation.y += -0.001;
    jupiter.rotation.y += -0.001;
    saturn.rotation.y += 0.001;
    saturnRing.rotation.z += 0.001;
    uranus.rotation.x += 0.001;
    neptune.rotation.x += 0.001;
    pluto.rotation.x += 0.003;
    sun.rotation.y += 0.0002;



    // controls.update(); // updates the camera from using the orbit controls
    renderer.render(scene, camera) // Renders the current scene with the given camera
}
animate()
