{/* 
    import RaffaelloFullscreen from '@site/src/components/RaffaelloFullscreen';
    <RaffaelloFullscreen className="js-previewImage" />
*/}

import React, { useEffect } from 'react';

export default function RaffaelloFullScreen({ className = 'js-previewImage' }) {
  useEffect(() => {
    // Wait until DOM is fully settled
    const initFullscreen = () => {
      if (!window.Raffaello_FullScreen) {
        setTimeout(initFullscreen, 100); // Wait for script
        return;
      }

      const targets = document.querySelectorAll(`.${className}`);
      if (targets.length === 0) {
        // Retry in case the elements aren't mounted yet
        setTimeout(initFullscreen, 100);
        return;
      }

      new window.Raffaello_FullScreen({ previewContainer: className });
    };

    // Defer to next idle frame or fallback
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initFullscreen);
    } else {
      setTimeout(initFullscreen, 100); // Fallback
    }
  }, [className]);

  return null;
}
