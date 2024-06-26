'use client'
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocomotiveScroll = (options) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !scrollRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      ...options,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [options]);

  return scrollRef;
};

export default useLocomotiveScroll;
