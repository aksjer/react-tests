import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeChange = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeChange);
    return () => {
      window.removeEventListener('resize', handleResizeChange);
    };
  });
  return width;
}
