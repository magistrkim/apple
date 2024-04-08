import { PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import Phone from './Phone';
import { Suspense } from "react";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border - 2 border-red-700 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
          <Lights />
          <Suspense fallback={<div>Loading...</div>}>
              <Phone/>
          </Suspense>
    </View>
  );
};

export default ModelView;