import { useState, useRef, useEffect } from 'react';

function LazyImage({ src, alt, style, className }) {

  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} style={{ position:'relative', overflow:'hidden', ...style }}>
      {/* Skeleton loader */}
      {!loaded && (
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize:'200% 100%',
          animation:'shimmer 1.5s infinite'
        }}>
          <style>{`
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `}</style>
        </div>
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={() => setLoaded(true)}
          style={{
            ...style,
            opacity: loaded ? 1 : 0,
            transition:'opacity 0.4s ease'
          }}
        />
      )}
    </div>
  );
}

export default LazyImage;