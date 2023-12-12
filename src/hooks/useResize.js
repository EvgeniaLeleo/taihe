import { useState, useEffect } from 'react';

import throttle from '../utils/throttle';
import { SCREEN_SM } from '../constants';
import { getStore } from '../utils/getStore';

export const useResize = () => {
  const { setWindowWidth } = getStore;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = throttle((event) => {
      setWidth(event.target.innerWidth);
      setWindowWidth(event.target.innerWidth);
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width <= SCREEN_SM,
  };
};
