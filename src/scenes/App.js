import './App.css';
import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import { Physics } from 'use-cannon';

function App() {
  return (
    <Canvas shadowMap sRGB>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.25} />
      <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
      </Physics>
    </Canvas>
  );
}

export default App;
