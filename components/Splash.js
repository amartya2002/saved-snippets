// Splash component

import React, { useEffect, useState } from "react";

import styles from "./Splash.module.css";

export default function Splash({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2);

    return () => clearTimeout(timeout);
  }, []);

  return (
    // <div className={`${styles.splashContainer} ${isMounted ? styles.showSplash : ''}`}>
    //   <div className={styles.splashContent}>
    //     <p className={`${styles.splashText} animate-pulse`}>Entropy UI</p>

    //     <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin items-center flex justify-center"></div>
    //   </div>
    // </div>

    <div
      className={`${styles.splashContainer} ${
        isMounted ? styles.showSplash : ""
      }`}
    >
      <div className="flex gap-6 flex-col justify-center items-center h-screen">
        <div className="rounded-2xl borer-4 borde-t-4 bg-gradient-to-r from-red-300 to-violet-300  border-violet-500 h-12 w-12  animate-bounce mb-3 shadow-2xl"></div>
        <p
          className={`${styles.splashText} text-4xl text-gray-300 animate-pulse`}
        >
          Favourite Snippets
        </p>
      </div>
    </div>
  );
}
