import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './App.scss';

function App() {
	const mountRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!mountRef.current) return;

		mountRef.current.innerHTML = '';

		// Створюємо сцену
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 500);
		camera.position.set(0, 0, 10); // Камера ближче, щоб краще бачити об'єкт
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
    
          // Получаем координаты мыши в диапазоне от -1 до 1
          const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
          const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    
          // Поворот черепа в зависимости от мыши
          model.rotation.y = mouseX * Math.PI * 0.5;  // Оборачиваем по оси Y
          model.rotation.x = mouseY * Math.PI * 0.5;  // Оборачиваем по оси X
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

		// Оновлення розміру рендерера при зміні вікна
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', handleResize);

		// Прибирання ефекту при демонтажі
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
