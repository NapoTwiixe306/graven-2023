import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PreloaderWithGSAP = ({ onLoaded }) => {
  const progressBarRef = useRef(null);
  const rectangleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation pour la barre de progression
    tl.to(progressBarRef.current, {
      width: '100%', 
      duration: 2, 
      ease: 'power3.inOut', 
      onComplete: () => {
        // Animation terminée, onLoaded est appelé
        tl.to(progressBarRef.current, {
          height: '100%', 
          duration: 1,
          ease: 'power3.inOut',
        });
        tl.to(rectangleRef.current, {
          width: '100vw', 
          duration: 1, 
          ease: 'power3.inOut',
          onComplete: () => {
            onLoaded();
          },
        });
      },
    });
  }, [onLoaded]);

  return (
    <div className="preloader">
      <div className="progress-bar" ref={progressBarRef}></div>
      <div className="rectangle" ref={rectangleRef}></div>
    </div>
  );
};

export default PreloaderWithGSAP;
