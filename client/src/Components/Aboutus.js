import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const rect = aboutSection.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight / 2;

      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-8 px-4">
      <div id="about">
        <Transition
          show={isVisible}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
        </Transition>
        <Transition
          show={isVisible}
          enter="transition-opacity duration-1000 delay-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          as="div"
        >
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam dolor ac urna
            aliquam posuere. Sed non nunc id erat ullamcorper ultricies vel a elit. Integer
            tincidunt purus at faucibus rhoncus. Sed non tortor ac mauris fringilla rutrum. In sed
            scelerisque elit. Duis et dui pharetra, ultricies urna non, eleifend tortor. Quisque
            ullamcorper urna nisl, sed laoreet lacus dignissim ut.
          </p>
        </Transition>
      </div>
    </div>
  );
};

export default AboutUs;
