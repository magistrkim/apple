import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";

const Features = () => {
  useGSAP(() => {
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 className="section-heading" id="features_title">
            Explore the full story
          </h1>
        </div>
        <div className="flexx flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium</h2>
                  </div>
                  <div></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
