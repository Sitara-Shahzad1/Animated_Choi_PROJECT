import React, { useEffect, useState } from "react";

const Eyes = () => {

  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e)=>{
     
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let x = mouseX - window.innerWidth/2;
      let y = mouseY - window.innerHeight/2;

      var angle = Math.atan2(y,x) *(180/Math.PI);
      setRotate(angle-180);

    })
  })
  

  return (
    <div className="eyes w-full h-screen overflow-hidden ">
      <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]   bg-cover bg-center ">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%]   -translate-y-[50%]  ">
        

<div className="w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100">
  <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-950 overflow-hidden">
    {/* Rotating container */}
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
    >
      {/* Red line from center to edge */}
      <div className="w-[2px] h-full mx-auto relative">
        {/* White dot at end of line */}
        <div className="w-9 h-9 rounded-full bg-white absolute top-0 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  </div>
</div>


<div className="w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100">
  <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-950 overflow-hidden">
    {/* Rotating container */}
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
    >
      {/* Red line from center to edge */}
      <div className="w-[2px] h-full mx-auto relative">
        {/* White dot at end of line */}
        <div className="w-9 h-9 rounded-full bg-white absolute top-0 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  </div>
</div>

 
        </div>
      </div>
    </div>
  );
};

export default Eyes;
