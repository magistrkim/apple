import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model control
  const smallModel = useRef(new THREE.Group());
  const largeModel = useRef(new THREE.Group());

  // rotation control
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 className="section-heading" id="heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
