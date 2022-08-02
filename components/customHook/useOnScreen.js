import { useEffect, useState, useRef } from "react";

export default function useOnScreen(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    if (ref) {
      observerRef.current.observe(ref.current);
    } else {
      return null;
    }

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
