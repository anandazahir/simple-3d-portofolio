import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import "./App.css";
import { Experience } from "./components/Experience";
import SplashScreen from "./components/SplashScreen";

// Footer Component
const Footer = () => {
  return (
    <motion.footer
      className="text-center p-4 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10"
      initial={{ opacity: 0, y: 20, x: -100 }}
      animate={{ opacity: 1, y: 0, x: -100 }}
      transition={{ delay: 3, duration: 0.5 }}
    >
      <p className="text-gray-600">
        &copy; Copyright 2025{" "}
        <a
          className="font-semibold"
          href="https://instagram.com/anandazahir"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nanda
        </a>
      </p>
    </motion.footer>
  );
};

function App() {
  const [cameraSettings, setCameraSettings] = useState({
    fov: 64,
    position: [2.3, 1.5, 2.3],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile devices
        setCameraSettings({
          fov: 75,
          position: [1.5, 1, 1.5],
        });
      } else {
        // Desktop devices
        setCameraSettings({
          fov: 64,
          position: [2.3, 1.5, 2.3],
        });
      }
    };

    handleResize(); // Set initial camera settings
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col place-content-between min-h-screen">
      {loading && <SplashScreen finishLoading={() => setLoading(false)} />}

      {/* Canvas for 3D Experience */}
      <motion.div
        className="h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <Canvas camera={cameraSettings}>
          <Experience />
        </Canvas>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
