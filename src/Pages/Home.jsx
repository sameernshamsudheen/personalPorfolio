import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
} from "three";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

const Home = () => {
  const adjusIslandForScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43.4];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjusIslandForScreen();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className="w-full bg-transparent h-screen"
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />

          <hemisphereLight
            args={["#b1e1ff", "#000000", 1]}
            position={[0, 50, 0]}
          />
          <Bird />

          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
