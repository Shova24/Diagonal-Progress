import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfoSection = () => {
  const progressBarRef = useRef(null);
  const clipPathRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    // Ensure elements are available
    if (!progressBarRef.current || !clipPathRef.current) return;

    console.log("Setting up GSAP animation"); // Debug log

    // GSAP scroll animation for progress bar
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: clipPathRef.current,
        start: "center top+=20%",
        end: "bottom center",
        scrub: 1,
        markers: true, // Keep markers for now
        onUpdate: (self) => {
          console.log("Progress:", self.progress); // Debug log
        },
        onToggle: (self) => {
          console.log("Trigger toggled:", self.isActive); // Debug log
        }
      }
    });

    tl.fromTo(progressBarRef.current, 
      { width: '20%' }, // Start with visible width
      { width: '100%', duration: 1 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section className="min-h-screen relative overflow-hidden bg-gray-100 flex items-center justify-center ">

    {/* Clip path's div */}
    <div 
      ref={clipPathRef}
      className="min-h-[90lvh] flex items-center justify-center bg-white clip-path" 
      style={{
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
        width: '100vw',
        height: '80%',
        marginTop: '10%',
        WebkitTransform: 'skewY(-16deg) translateY(-50%)',
        MozTransform: 'skewY(-16deg) translateY(-50%)',
        transform: 'skewY(-16deg) translateY(-50%)',
        WebkitTransformOrigin: '0 0',
        MozTransformOrigin: '0 0',
        transformOrigin: '0 0',
        background: '#fff'
      }}
    >



      {/* Progress bar positioned at bottom of clip path */}
      <div 
        ref={progressBarRef}
        className="progress-area"
        style={{
          position: 'absolute',
          bottom: '0px', // At the very bottom of the clip path
          left: 0,
          width: '50%', // Visible starting width
          height: '8px',
          background: '#e31635',
          zIndex: 10,
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}
      ></div>
    </div>

          <div className='top-content  absolute top-0 left-0 right-0 z-20 ' style={{marginTop: '10%'}}>
      <div >
        <h1 className="text-3xl font-bold mb-4">It's a clip path place</h1>
        <p className="text-lg text-center max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit?</p>
      </div>

      </div>

    {/* Remove the separate divider - it's now part of the clip path */}

    {/* the div that gonna be under this */}
    <div className=" bg-black absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center" style={{zIndex: 1}}>
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Here could be the slider</h2>
        <p>This content is behind the clipped section</p>
      </div>
    </div>
        
    </section>
  )
}

export default InfoSection