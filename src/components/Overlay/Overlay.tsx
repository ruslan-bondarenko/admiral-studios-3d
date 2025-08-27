import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props: any) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"
        }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">
              Hyundai Kona 2020
            </h1>
            <p className="text-gray-500">Imagine KONA in your everyday life.</p>
          </div>
        </Section>

        <Section right opacity={opacitySecondSection}>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold font-serif text-2xl">
              A Sporty and Aerodynamic Look from the Front to the Rear
            </h3>
            <p className="text-gray-500">
              KONA’s design features, such as its aerodynamic nose, wheel arch
              cladding, and rugged skid plate, create a more active driving
              experience while also ensuring energy efficiency through the active
              air flap's ventilation system with an engine coolant temperature
              sensor that regulates air flow.
            </p>
          </div>
        </Section>

        <Section opacity={opacityLastSection}>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold font-serif text-2xl">
              Meet the Entire Lineup of The all-new KONA
            </h3>
            <p className="text-gray-500">
              Meet the bolder, more dynamic, EV-led design KONA with unique
              styling across a range of powertrains. : the all-electric (EV),
              hybrid electric (HEV), internal combustion engine (ICE), and sporty
              N LIne.
            </p>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
