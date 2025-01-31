import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './App.scss';

function App() {
	const mountRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!mountRef.current) return;

		mountRef.current.innerHTML = '';

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 500);
		camera.position.set(0, 0, 10);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current.appendChild(renderer.domElement);

		const light = new THREE.AmbientLight(0x404040, 1);
		scene.add(light);
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(5, 5, 5);
		scene.add(directionalLight);

		const loader = new GLTFLoader();
		loader.load(
			'skull/scene.gltf',
			(gltf) => {
				const model = gltf.scene;
				scene.add(model);

        
        const onMouseMove = (event: MouseEvent) => {
          if (!model) return;

          const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
          const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    
          model.rotation.y = mouseX * Math.PI * 0.5; 
          model.rotation.x = mouseY * Math.PI * 0.5; 
        };
    
        window.addEventListener('mousemove', onMouseMove);
			},
			undefined,
			(error) => console.error('Error loading model:', error)
		);

    
		const animate = () => {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		};
		animate();

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			mountRef.current?.removeChild(renderer.domElement);
			renderer.dispose();
		};
	}, []);

  return <>
    <p className='title'>GOLOVA</p>
    <div ref={mountRef} className="three-container"></div>
  </>;
}

export default App;
