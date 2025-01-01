import { useEffect, useRef } from "react";
//kaydırma animasyonunu gerçekleştiren hook
const useAutoScroll = (startAutoScroll) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const stopScrolling = startAutoScroll(scrollContainerRef);
      return stopScrolling;
    }
  }, [startAutoScroll]);

  return scrollContainerRef;
};

export default useAutoScroll;
